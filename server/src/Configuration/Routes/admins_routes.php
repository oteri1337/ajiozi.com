<?php

use Server\Controllers\AdminsController;

use Server\Database\Models\Admin;

$app->get('/test', function($request, $response) {
    $admins = Admin::get()->toArray();

    echo "<pre>";
    var_dump($admins);
});

$app->post('/api/admins', AdminsController::class.':create')->add($admin_logged_in);

$app->get('/api/admins', AdminsController::class.':list');

$app->get('/api/admins/me', AdminsController::class.':me');

$app->post('/api/admins/auth/signin', AdminsController::class.':signIn');

$app->get('/api/admins/auth/signout', AdminsController::class.':signOut');

$app->get('/api/admins/auth/status', AdminsController::class.':status');

