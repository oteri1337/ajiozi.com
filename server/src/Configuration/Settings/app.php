<?php

$app = new Slim\App(['settings' => ['displayErrorDetails' => true]]);

// CORS Middleware
$app->add(function ($request, $response, $next) {
    $response = $next($request, $response);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->withHeader('Access-Control-Allow-Credentials', 'true')
            ->withHeader('Access-Control-Allow-Headers', 'content-type');            
});

$container = $app->getContainer();

$container['notFoundHandler'] = function () {
    return function ($request, $response) {
        return $response->withJson(['errors' => ['resource not found']]);
    };
};

bootUpEloquent();

Illuminate\Pagination\Paginator::currentPathResolver(function() {
    return strtok($_SERVER['REQUEST_URI'], '?') ?? '/';
});

Illuminate\Pagination\Paginator::currentPageResolver(function() {
    return $_GET['page'] ?? 1;
});


use Server\Library\Middlewares\UserLoggedIn;
use Server\Library\Middlewares\AdminLoggedIn;

$user_logged_in = new UserLoggedIn;
$admin_logged_in = new AdminLoggedIn;
