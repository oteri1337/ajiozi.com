<?php

use Server\Controllers\CmsController;

$app->post('/api/cms/contact', CmsController::class.':contact');
