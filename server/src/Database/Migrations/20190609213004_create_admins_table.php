<?php 

use Server\Database\Migrations\ParentMigration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdminsTable extends ParentMigration {

    public function up() {
        $this->schema->create('admins', function(Blueprint $table) {
            $table->increments('id');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('token')->nullable();
            $table->dateTime('token_expires')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        $this->schema->drop('admins');
    }
}