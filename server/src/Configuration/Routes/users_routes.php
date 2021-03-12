<?php


use Server\Controllers\UsersController;

$app->post('/api/users/cart', UsersController::class.':addToCart')->add($user_logged_in);

$app->delete('/api/users/cart', UsersController::class.':removeFromCart')->add($user_logged_in);

$app->post('/api/users/cart/getcost', UsersController::class.':getCartCost')->add($user_logged_in);

$app->post('/api/users/orders', UsersController::class.':createOrder')->add($user_logged_in);

