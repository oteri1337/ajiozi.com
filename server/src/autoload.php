<?php

$dotenv = new \Dotenv\Dotenv(__DIR__);
$dotenv->load();

// Settings
require_once('Configuration/Settings/app.php');
// require_once('Configuration/Settings/middlewares.php');
// require_once('Configuration/Settings/observers.php');

// Routes
require_once('Configuration/Routes/products_routes.php');
require_once('Configuration/Routes/users_auth_routes.php');
require_once('Configuration/Routes/users_routes.php');
require_once('Configuration/Routes/orders_routes.php');
require_once('Configuration/Routes/cms_routes.php');

// require_once('Configuration/Routes/carts_routes.php'); // storage - session
// require_once('Configuration/Routes/admins_routes.php');
// require_once('Configuration/Routes/categories_routes.php');
//require_once('Configuration/Routes/email_routes.php'); // storage - none
// require_once('Configuration/Routes/ssr_routes.php');