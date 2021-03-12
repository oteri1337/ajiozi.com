<?php

use Server\Controllers\CartsController;

$app->get('/api/carts', CartsController::class.':getCart')->add($user_logged_in);




$app->post('/api/carts/checkout', CartsController::class.':checkout')->add($user_logged_in);

$app->get('/api/carts/clear', CartsController::class.':clearCart')->add($user_logged_in);

