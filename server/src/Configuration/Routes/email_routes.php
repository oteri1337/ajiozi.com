<?php

use Server\Controllers\EmailsController;

$app->post('/api/emails', EmailsController::class.':create');


