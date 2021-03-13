<?php

require_once('vendor/autoload.php');

$dotenv = new \Dotenv\Dotenv(__DIR__ . '/src');
$dotenv->load();

return [
    'migration_base_class' => 'Server\Database\Migrations\ParentMigration',
    'paths' => [
        'migrations' => 'src/Database/Migrations',
        'seeds' => 'src/Database/Seeds'
    ],
    'templates' => [
        'file' => 'src/Database/Migrations/template.txt'
    ],
    'environments' => [
        'default_migrations_table' => 'migrations',
         'default' => [
                'user' => getenv("DB_USERNAME"),
                'pass' => getenv("DB_PASSWORD"),
                'host' => getenv("DB_HOST"),
                'port' => getenv("DB_PORT"),
                'name' => getenv("DB_NAME"),
                'adapter' => 'mysql'
             ]
    ],

];