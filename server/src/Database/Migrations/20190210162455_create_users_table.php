<?php 

use Server\Database\Migrations\ParentMigration;
use Illuminate\Database\Schema\Blueprint;

class CreateUsersTable extends ParentMigration {

    public function up() {
        $this->schema->create('users', function(Blueprint $table) {
            $table->increments('id');
            $table->string('email');
            $table->string('password');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('other_name')->nullable();
            $table->string('phone_number')->nullable();

            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('post_code')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();

            $table->string('gender')->nullable();
            $table->string('dob')->nullable();

            $table->string('photo_front_view')->nullable();
            $table->string('photo_back_view')->nullable();
            $table->string('photo_profile')->default("default.png");

            $table->string('email_token')->default("123233i29032093209329");
            $table->string('password_token')->nullable();

            $table->boolean('email_verified')->default(0);
            $table->boolean('identity_verified')->default(0);

            $table->timestamps();
        });
    }

    public function down() {
        $this->schema->drop('users');
    }   
}