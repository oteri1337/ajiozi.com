<?php
require_once('../server/vendor/autoload.php');

session_start();
require_once('../server/src/autoload.php');


use Symfony\Component\Process\Process;
use Server\Database\Models\Product;

$container['view'] = function ($container) {
    $directory = __DIR__;
    $slim_twig = new Slim\Views\Twig($directory);
    $twig_extenstion = new Slim\Views\TwigExtension($container->router,$container->request->getUri());
    $slim_twig->addExtension($twig_extenstion);
    return $slim_twig;
};

// $container['products_upload_directory'] = __DIR__ . '/images/products/';

// client side rendering
// $app->get('/[{path:.*}]', function($request, $response) use ($container) {
    
//     var_dump($context);
//     // return $container->view->render($response, 'index.html');
// });

// server side rendering
$app->get('/[{path:.*}]', function($request, $response) use ($container) {
// try {
    // $context = json_encode([]);
    // $process = new Process(['node', 'app', $request->getRequestTarget(), $context]);
    // $html = $process->mustRun()->getOutput();
    // return $container->view->render($response, 'index.html', ['Html' => $html, 'Context' => $context]);

// } catch(\Exception $e) {
//     echo $e;
    return $container->view->render($response, 'index.html');
// }
});

$app->run();

?>