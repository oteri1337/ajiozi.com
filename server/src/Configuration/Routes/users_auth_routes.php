<?php

use Server\Controllers\UsersController;

// Users Auth

$app->get('/api/users/auth/status', UsersController::class.':status'); 

$app->post('/api/users/auth/signin', UsersController::class.':signin'); 

$app->get('/api/users/auth/signout', UsersController::class.':signout')->add($user_logged_in); 


// Users Verification

$app->patch('/api/users/auth/verify/email', UsersController::class.':verifyEmail');

$app->post('/api/users/auth/verify/id', UsersController::class.':verifyId')->add($user_logged_in);

$app->patch('/api/users/auth/verify/id/approve', UsersController::class.':verifyIdApprove')->add($admin_logged_in);

$app->patch('/api/users/auth/verify/id/decline', UsersController::class.':verifyIdDecline')->add($admin_logged_in);


// Tokens

$app->post('/api/users/auth/token/email/verify', UsersController::class.':tokenForEmailVerify');

$app->get('/api/users/auth/token/email/update', UsersController::class.':tokenForEmailUpdate')->add($user_logged_in);

$app->post('/api/users/auth/token/password/update', UsersController::class.':tokenForPasswordUpdate'); 


// Updates

$app->post('/api/users/auth/update/photo', UsersController::class.':updatePhoto')->add($user_logged_in);

$app->patch('/api/users/auth/update/phone', UsersController::class.':updatePhone')->add($user_logged_in);

$app->patch('/api/users/auth/update/address', UsersController::class.':updateAddress')->add($user_logged_in);

$app->patch('/api/users/auth/update/email', UsersController::class.':updateEmail')->add($user_logged_in);

$app->patch('/api/users/auth/update/password', UsersController::class.':updatePassword');

