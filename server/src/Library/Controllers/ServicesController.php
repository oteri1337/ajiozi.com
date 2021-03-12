<?php

namespace Server\Library\Controllers;

use Twig\Loader\FilesystemLoader;
use Monolog\Handler\StreamHandler;

use Server\Library\Services\Validator;
use Server\Library\Services\Renderer;
use Server\Library\Services\Mailer;
use Server\Library\Services\Logger;


class ServicesController {
    
    protected $validator;
    protected $renderer;
    protected $mailer;
    protected $logger;
    protected $domain;
    
    public function __construct() {
        $publicDirectory = __DIR__.'/../../../../public_html';
        $imageDirectory = __DIR__.'/../../../../public_html/uploads/images/';

        $this->imageDirectory = $imageDirectory;

        $this->validator = new Validator;

        $loader = new FilesystemLoader($publicDirectory);
        $this->renderer = new Renderer($loader);
        
        $this->mailer = new Mailer;
        $this->mailer->setConfig();

        $this->logger = new Logger('services');
        $streamHandler = new StreamHandler(__DIR__.'\..\..\Logs.txt');
        $this->logger->pushHandler($streamHandler);

        $this->domain = getenv("APP_URL"); 
    }
   
}