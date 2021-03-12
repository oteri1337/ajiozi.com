<?php

namespace Server\Controllers;


class EmailsController extends ParentController 

{


    public function create($request, $response) {

        $body = $request->getParsedBody();
        $body['email'] = $body['email'] ?? '';
        $body['subject'] = $body['subject'] ?? '';
        $body['body'] = $body['body'] ?? '';

        $rules = [
            'email address' => [$body['email'], 'required|email'],
            'subject' => [$body['subject'], 'required'],
            'body' => [$body['body'], 'required']
        ];

        $this->validator->validate($rules);
        
        $errors = $this->validator->errors()->all();

        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        $this->mailer->provider->addAddress($body['email']);
        $this->mailer->provider->Subject = $body['subject'];
        $this->mailer->provider->Body = $body['body'];
        $sent = $this->mailer->provider->send();

        if (!$sent) {
            return $response->withJson(['errors' => $this->mailer->provider->ErrorInfo]);
        }

        return $response->withJson(['errors' => [], 'data' => "sent successfully"]);
    }


}