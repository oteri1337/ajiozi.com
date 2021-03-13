<?php 

use Server\Database\Migrations\ParentMigration;
use Illuminate\Database\Schema\Blueprint;

class CreateProductsTable extends ParentMigration {

    public function up() {
        $this->schema->create('products', function(Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->double('price',11,2);
            $table->string('price_string')->nullable();
            $table->integer('stock')->default(1);
            $table->integer('quantity')->default(1);
            $table->string('description');
            $table->string('image_one');
            $table->string('image_two')->nullable();
            $table->string('image_three')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        $this->schema->drop('products');
    }
}