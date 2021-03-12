<?php

$dotenv = new \Dotenv\Dotenv(__DIR__);
$dotenv->load();

function bootUpEloquent() {
    $settings = [
        'username' => getenv("DB_USERNAME"),
        'password' => getenv("DB_PASSWORD"),
        'host' => getenv("DB_HOST"),
        'database' => getenv("DB_NAME"),
        'driver' => 'mysql',
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => ''
     ];
    
    $capsule = new Illuminate\Database\Capsule\Manager;
    $capsule->addConnection($settings);
    $capsule->setEventDispatcher(new Illuminate\Events\Dispatcher);
    $capsule->setAsGlobal();
    $capsule->bootEloquent();
    return $capsule;
}