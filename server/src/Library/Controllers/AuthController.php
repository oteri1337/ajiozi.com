<?php

namespace Server\Library\Controllers;

class AuthController extends ApiController 
{ 
    protected $authKey;



    // Basic Auth

    public function status($request, $response) {
        $hasSession = isset($_SESSION[$this->authKey]['id']);

        if (!$hasSession) {
            return $response->withJson(['errors' => [], 'data' => false]);
        }

        $row = $this->model->where('id', $_SESSION[$this->authKey]['id'])->first();
        if (!$row) {
            return $response->withJson(['errors' => [], 'data' => false]);
        }

        $row = $this->relationships($row);
        
        return $response->withJson(['errors' => [], 'data' => $row]);
    }

    public function signIn($request, $response) { 

        $body = $request->getParsedBody();
        
        $email = $body['email'] ?? '';
        $password = $body['password'] ?? '';

        $rules = [
            'email' => [$email, 'required|email'],
            'password' => [$password, 'required']
        ];

        $this->validator->validate($rules);

        $errors = $this->validator->errors()->all();

        if ($errors) {
            return $response->withJson(['errors' => $errors, 'data' => '']);
        }

        $password = sha1($password);

        $row = $this->model->where('email', $email)->where('password', $password)->first();

        if (!$row) {
            return $response->withJson(['errors' => ['invalid email or password'], 'data' => '']);
        }

        $row = $this->relationships($row);
        $_SESSION[$this->authKey]['id'] = $row->id;
    
        // return token

        return $response->withJson(['errors' => [], 'data' => $row]);

    }

    public function signOut($request, $response) {
        unset($_SESSION[$this->authKey]);

        // update csrf token in database

        return $response->withJson(['errors' => [], 'data' => 'sign out successful']);
    }


    //  Verification

    public function verifyEmail($request, $response) {
        $body = $request->getParsedBody();
        $email = $body['email'] ?? '';
        $token = $body['token'] ?? '';

        $row = $this->model->where('email', $email)->where('email_token', $token)->first();

        if (!$row) {
            $this->data['errors'] = ['invalid email or token'];
            return $response->withJson($this->data);
        }

        $row->update([
            'email_verified' => 1,
            'email_token' => rand(0,999999)
        ]);

        $row = $this->model->where('email', $email)->first();

        $_SESSION[$this->authKey]['id'] = $row->id;

        $this->data['data'] = $row;
        $this->data['message'] = 'Email Verification Successful';
        return $response->withJson($this->data);
    }

    public function verifyId($request, $response) {
        
        $user = $request->getAttribute('user');

        $photo_front_view = $_FILES['photo_front_view'] ?? '';
        $photo_back_view = $_FILES['photo_back_view'] ?? '';

        $rules = [
            'front view' => [$photo_front_view, 'required'],
            'back view' => [$photo_back_view, 'required'],
        ];

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();
        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        $newFiles = $this->prepareFiles($_FILES, $user->id);
        
        foreach($newFiles as $key => $file) {
            $acceptedFormats = ['jpg','jpeg','png'];
            $format_is_accepted = in_array($file['format'], $acceptedFormats);

            if (!$format_is_accepted) {
                return $response->withJson(['errors' => [$key.'file format not acccepted'], 'data' => []]);
            }

            $uploaded = move_uploaded_file($file['tmp_name'],$this->imageDirectory.$file['new_name']);

            if (!$uploaded) {
                return $response->withJson(['errors' => ['failed to upload'.$key], 'data' => []]);
            }
        }

        $user->update([
            'photo_front_view' => $newFiles['photo_front_view']['new_name'],
            'photo_back_view' => $newFiles['photo_back_view']['new_name']
        ]);

        $id = $_SESSION[$this->authKey]['id'];
        $user = $this->model->where('id', $id)->first();

        return $response->withJson(['errors' => [], 'data' => $user]);

    }

    public function verifyIdApprove($request, $response) {

        // Body Validation
        $body = $request->getParsedBody();
        $id = $body['id'] ?? '';
        $rules = ['id' => [$id, 'required']];
        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();
        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        // Database Validation
        $row = $this->model->where('id', $id);
        if ($row->exists() === false) {
            return $response->withJson(['errors' => ['not found'], 'data' => []]);
        }

        // Processing
        $row->first()->update(['identity_verified' => 1]);
        $row = $this->model->where('id', $id)->first();

        // send approved mail
        $url = getenv("APP_URL"); 

        $data = ['title' => 'Account Activated', 'url' => $url, 'content' => '        
            <p>Your account has been activated, Click on this <a href="'.$url.'/signin">link</a> to login </p>
        '];
 
        $body = $this->renderer->render('email.html', $data);

        $this->mailer->sendSingle($row->email, "Account Activated", $body);

        return $response->withJson(['errors' => [], 'data' => $row]);
    }
    
    public function verifyIdDecline($request, $response) {

        // Body Validation
        $body = $request->getParsedBody();
        $id = $body['id'] ?? '';
        $rules = ['id' => [$id, 'required']];
        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();
        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        // Database Validation
        $row = $this->model->where('id', $id);
        if ($row->exists() === false) {
            return $response->withJson(['errors' => ['not found'], 'data' => []]);
        }

        // Processing
        $row->first()->update(['photo_front_view' => null, 'photo_back_view' => null]);
        $row = $this->model->where('id', $id)->first();

        // send declined email
        $url = getenv("APP_URL"); 

        $data = ['title' => 'Account Approval Declined', 'url' => $url, 'content' => '        
            <p>Your account has been declined, Follow this <a href="'.$url.'/verify/idenity">link</a> to re-upload your valid government issued Identification Card.</p>
        '];
 
        $body = $this->renderer->render('email.html', $data);

        $this->mailer->sendSingle($row->email, "Account Approval Declined", $body);

        return $response->withJson(['errors' => [], 'data' => $row]);
    }   

    
    // Tokens 

    public function tokenForEmailVerify($request, $response) {
        $body = $request->getParsedBody();
        $email = $body['email'] ?? '';

        $rules = [
            'email' => [$email, 'required|email'],
        ];

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            $this->data['errors'] = $errors;
            return $response->withJson($this->data);
        }

        $row = $this->model->where('email', $email)->first();

        if (!$row) {
            $this->data['errors'] = ['user not found'];
            return $response->withJson($this->data);
        }

        $url = getenv("APP_URL"); 

        if ($this->authKey == 'user') {
            $data = ['title' => 'Email Verification', 'url' => $url, 'content' => '        
            <p>Please visit '.$url.'/verify/email/'.$row->email.'/'. $row->email_token.' to verify your email </p>
        '];
        $body = 'Please visit ' .$url.'/verify/email/'.$row->email.'/'. $row->email_token.' to verify your email';
        }

        if ($this->authKey == 'admin') {
            $data = ['title' => 'Email Verification', 'url' => $url, 'content' => '        
            <p>Please visit '.$url.'/control/verify/email/'.$row->email_token.'" to verify your email </p>
        '];
        }

        $htmlBody = $this->renderer->render('email.html', $data);

        $this->mailer->addAddress($row->email);
        $this->mailer->Subject = 'Email Verification';
        $this->mailer->Body = $htmlBody;
        $this->mailer->AltBody = $body ?? '';
        $sent = $this->mailer->send();

        // $sent = $this->mailer->sendSingle($row->email, "Email Verification", $body);

        if (!$sent) {
            $this->data['errors'] = ['Failed to send verification link, please contact customer service'];
            return $response->withJson($this->data);
        }

        $this->data['message'] = 'Email verification link sent successfully, check your inbox or spam folder.';
        return $response->withJson($this->data);
    }

    public function tokenForPasswordUpdate($request, $response) {
        $body = $request->getParsedBody();
        
        $email = $body['email'] ?? '';

        $rules = [
            'email' => [$email, 'required|email'],
        ];

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            $this->data['errors'] = $errors;
            return $response->withJson($this->data);
        }

        $row = $this->model->where('email', $email);

        if (!$row->exists()) {
            $this->data['errors'] = ['email not found'];
            return $response->withJson($this->data);
        }

        $row = $row->first();

        $token = rand(0,999999);

        $row->update([
            'password_token' => $token
        ]);

        $url = getenv("APP_URL"); 
 
        $data = ['title' => 'Reset Password', 'url' => $url, 'content' => '        
            <p>Please click on this <a href="'.$url.'/update/password/'.$row->email.'/'.$token.'">link</a> to reset your password </p>
        '];

        $body = $this->renderer->render('email.html', $data);

        $sent = $this->mailer->sendSingle($row->email, "Reset Password", $body);

        if (!$sent) {
            $this->data['errors'] = ['Failed to send reset link, please contact customer service'];
            return $response->withJson($this->data);
        }

        $this->data['message'] = 'Reset password link sent successfully';
        return $response->withJson($this->data);
    }

    public function tokenForEmailUpdate($request, $response) {
        $row = $request->getAttribute('user');

        $token = rand(0, 999999);

        $row->update([
            'email_token' => $token
        ]);

        $url = getenv("APP_URL"); 

        if ($this->authKey == 'user') {
            $data = ['title' => 'Email Update', 'url' => $url, 'content' => '        
            <p>Please click on this <a href="'.$url.'/user/account/update/email/'.$row->email_token.'">link</a> to update your email </p>
        '];
        }

        if ($this->authKey == 'admin') {
            $data = ['title' => 'Email Update', 'url' => $url, 'content' => '        
            <p>Please click on this <a href="'.$url.'/control/update/email/'.$row->email_token.'">link</a> to update your email </p>
        '];
        }
 
        $body = $this->renderer->render('email.html', $data);

        $sent = $this->mailer->sendSingle($row->email, "Email Update", $body);

        if (!$sent) {
            $this->data['errors'] = ['Failed to send update link, please contact customer service or try again.'];
            return $response->withJson($this->data);
        }

        $this->data['message'] = 'Email update link sent successfully, please check your mail box.';
        return $response->withJson($this->data);
    }



    // Updates

    public function updatePhoto($request, $response) {
                
        $user = $request->getAttribute('user');

        $photo = $_FILES['photo'] ?? '';

        $rules = [
            'photo' => [$photo, 'required'],
        ];

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();
        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        $newFiles = $this->prepareFiles($_FILES, $user->id);
        $time = time();
        
        foreach($newFiles as $key => $file) {
            $acceptedFormats = ['jpg','jpeg','png'];
            $format_is_accepted = in_array($file['format'], $acceptedFormats);

            if (!$format_is_accepted) {
                return $response->withJson(['errors' => [$key.'file format not acccepted'], 'data' => []]);
            }

            $uploaded = move_uploaded_file($file['tmp_name'],$this->imageDirectory.$time.$file['new_name']);

            if (!$uploaded) {
                return $response->withJson(['errors' => ['failed to upload'.$key], 'data' => []]);
            }
        }

        $user->update([
            'photo_profile' => $time.$newFiles['photo']['new_name']
        ]);

        $id = $_SESSION[$this->authKey]['id'];
        $user = $this->model->where('id', $id)->first();

        return $response->withJson(['errors' => [], 'data' => $user]);
    }

    public function updatePhone($request, $response) {
        $body = $request->getParsedBody();
        $user = $request->getAttribute('user');
        
        $new_phone_number = $body['new_phone_number'] ?? '';

        $rules = [
            'new phone number' => [$new_phone_number, 'required|number'],
        ];

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            $this->data['errors'] = $errors;
            return $response->withJson($this->data);
        }

        $user->update([
            'phone_number' => $new_phone_number
        ]);

        $id = $_SESSION[$this->authKey]['id'];
        $user = $this->model->where('id', $id)->first();

        $this->data['data'] = $user;
        $this->data['message'] = 'Phone Number Updated Successfully';
        return $response->withJson($this->data);
    }

    public function updateAddress($request, $response) {
        $body = $request->getParsedBody();
        $user = $request->getAttribute('user');
        
        $address = $body['address'] ?? '';
        $city = $body['city'] ?? '';
        $state = $body['state'] ?? '';
        $post_code = $body['post_code'] ?? '';
        $country = $body['country'] ?? '';

        $rules = [
            'address' => [$address, 'required'],
            'city' => [$city, 'required'],
            'state' => [$state, 'required'],
            'post_code' => [$post_code, 'required'],
            'country' => [$country, 'required']
        ];

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            $this->data['errors'] = $errors;
            return $response->withJson($this->data);
        }

        $body = $this->filter($body, [
            'address',
            'city',
            'state',
            'post_code',
            'country'
        ]);

        $user->update($body);

        $id = $_SESSION[$this->authKey]['id'];
        $user = $this->model->where('id', $id)->first();

        $this->data['data'] = $user;
        $this->data['message'] = 'Update Successful';
        return $response->withJson($this->data);
    }

    public function updatePassword($request, $response) {
        $body = $request->getParsedBody();
        
        $email = $body['email'] ?? '';
        $token = $body['token'] ?? '';
        $password = $body['new_password'] ?? '';
        $confirm_password = $body['confirm_new_password'] ?? '';

        $rules = [
            'email' => [$email, 'required'],
            'token' => [$token, 'required'],
            'password' => [$password, 'required|min(7)'],
            'password confirmation' => [$confirm_password, 'required|matches(password)'],
        ];

        $this->validator->validate($rules);

        $errors = $this->validator->errors()->all();

        if ($errors) {
            $this->data['errors'] = $errors;
            return $response->withJson($this->data);
        }

        $row = $this->model->where('email', $email)->where('password_token', $token);

        if (!$row->exists()) {
            $this->data['errors'] =  ['invalid/expired reset link'];
            return $response->withJson($this->data);
        }

        $row = $row->first();

        $row->update([
            'password' => $password,
            'password_token' => rand(0,999999)
        ]);

        $this->data['message'] = "Password Updated Successfully";
        return $response->withJson($this->data);
        
    }

    public function updateEmail($request, $response) {
        $user = $request->getAttribute("user");
        $body = $request->getParsedBody();
        
        $token = $body['token'] ?? '';
        $email = $body['new_email'] ?? '';
        $email_confirmation = $body['confirm_new_email'] ?? '';

        $rules = [
            'email' => [$email, 'required|email'],
            'new email confirmation' => [$email_confirmation, 'required|email|matches(email)'],        
        ];

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();
        if ($errors) {
            $this->data['errors'] = $errors;
            return $response->withJson($this->data);
        }

        $user->update([
            'email' => $email,
            'email_verified' => 0
        ]);

        $id = $_SESSION[$this->authKey]['id'];
        $user = $this->model->where('id', $id)->first();

        $this->data['data'] = $user;
        return $response->withJson($this->data);
    }


}