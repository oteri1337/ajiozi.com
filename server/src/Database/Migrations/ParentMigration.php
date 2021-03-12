<?php

namespace Server\Database\Migrations;

use Phinx\Migration\AbstractMigration;
use Illuminate\Database\Capsule\Manager;

class ParentMigration extends AbstractMigration {

    protected $schema;
    
    public function init() {
        $capsule = bootUpEloquent();
        $this->schema = $capsule->schema();
    }
    
}

