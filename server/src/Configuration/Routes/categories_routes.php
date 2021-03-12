<?php

use Server\Controllers\CategoriesController;

$app->get('/api/categories', CategoriesController::class.':list');

$app->post('/api/categories', CategoriesController::class.':create')->add($admin_logged_in);

$app->get('/api/categories/{attr}', CategoriesController::class.':read');

$app->patch('/api/categories/{attr}', CategoriesController::class.':update')->add($admin_logged_in);

$app->delete('/api/categories/{attr}', CategoriesController::class.':delete')->add($admin_logged_in);