<?php

use Server\Controllers\ProductsController;

$app->get('/api/products', ProductsController::class.':list');

$app->post('/api/products/search', ProductsController::class.':search');

$app->get('/api/products/{attr}', ProductsController::class.':read');

$app->post('/api/products', ProductsController::class.':create')->add($admin_logged_in);

$app->patch('/api/products/{attr}', ProductsController::class.':update')->add($admin_logged_in);


$app->post('/api/products/{attr}/image_one', ProductsController::class.':updateImageOne')->add($admin_logged_in);

$app->post('/api/products/{attr}/image_two', ProductsController::class.':updateImageTwo')->add($admin_logged_in);

$app->post('/api/products/{attr}/image_three', ProductsController::class.':updateImageThree')->add($admin_logged_in);

$app->delete('/api/products/{attr}/image_one', ProductsController::class.':deleteImageOne')->add($admin_logged_in);

$app->delete('/api/products/{attr}/image_two', ProductsController::class.':deleteImageTwo')->add($admin_logged_in);

$app->delete('/api/products/{attr}/image_three', ProductsController::class.':deleteImageThree')->add($admin_logged_in);

$app->delete('/api/products/{attr}', ProductsController::class.':delete')->add($admin_logged_in);

$app->post('/api/products/{attr}/sync/categories', ProductsController::class.':syncCategories')->add($admin_logged_in);
