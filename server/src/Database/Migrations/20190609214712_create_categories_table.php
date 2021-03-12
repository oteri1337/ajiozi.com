<?php 

use Server\Database\Migrations\ParentMigration;
use Illuminate\Database\Schema\Blueprint;

class CreateCategoriesTable extends ParentMigration {

    public function up() {
        $this->schema->create('categories', function(Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('slug');
            $table->string('image');
            $table->timestamps();
        });
    }

    public function down() {
        $this->schema->drop('categories');
    }
}