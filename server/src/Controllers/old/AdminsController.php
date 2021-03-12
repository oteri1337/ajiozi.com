<?php

namespace Server\Controllers;

use Server\Controllers\Library\AuthController;
use Server\Database\Models\Admin;

class AdminsController extends AuthController 
{
    public function __construct() {
        parent::__construct();
        $this->model = new Admin;
        $this->authKey = 'admin';
    }

    public function create($request, $response) {
        
        $body = $request->getParsedBody();
        $body['email'] = $body['email'] ?? '';
        $body['password'] = $body['password'] ?? '';
        $body['password2'] = $body['password2'] ?? '';

        $rules = [
            'email' => [$body['email'], 'email|required|notExistsAdminEmail'],
            'password' => [$body['password'], 'required'],
            'password confirmation' => [$body['password2'], 'required|matches(password)']
        ];

        $this->validator->validate($rules);

        $errors = $this->validator->errors()->all();

        if($errors) {
            return $response->withJson(['errors' =>  $errors, 'data' => []]);
        }

        $row = $this->model->create($body);
        
        $_SESSION['admin']['id'] = $row->id;

        return $response->withJson(['errors' =>  [], 'data' => $row]);
 
    }

}

