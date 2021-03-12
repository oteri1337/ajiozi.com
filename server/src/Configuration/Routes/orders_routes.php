<?php

use Server\Controllers\OrdersController;

$app->get('/api/orders/{attr}', OrdersController::class.':read');

$app->patch('/api/orders/pay', OrdersController::class.':verifyPayment');


// $app->post('/api/orders', OrdersController::class.':create')->add($user_logged_in);

// $app->get('/api/orders', OrdersController::class.':list');


// $app->patch('/api/orders/{attr}', OrdersController::class.':update')->add($admin_logged_in);
