<?php

namespace Server\Controllers;

use Server\Library\Controllers\ServicesController;
    
class CmsController extends ServicesController {

    public function contact($request, $response) {
        $body = $request->getParsedBody();
        $body['name'] = $body['name'] ?? '';
        $body['email'] = $body['email'] ?? '';
        $body['subject'] = $body['subject'] ?? '';
        $body['body'] = $body['body'] ?? '';

        $rules = [
            'name' => [$body['name'], 'required'],
            'email address' => [$body['email'], 'required|email'],
            'subject' => [$body['subject'], 'required'],
            'body' => [$body['body'], 'required']
        ];

        $this->validator->validate($rules);
        
        $errors = $this->validator->errors()->all();

        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        $service = getenv("MAIL_USERNAME");
        $this->mailer->addAddress($service);
        $this->mailer->FromName = $body['name'];
        $this->mailer->Subject = $body['subject'];
        $this->mailer->Body = $body['body'];
        $sent = $this->mailer->send();

        if (!$sent) {
            return $response->withJson(['errors' => [$this->mailer->ErrorInfo], 'data' => '']);
        }

        return $response->withJson(['errors' => [$service], 'data' => "email sent successfully"]);        
    }
    
}