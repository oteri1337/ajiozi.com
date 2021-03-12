<?php 

use Server\Database\Migrations\ParentMigration;
use Illuminate\Database\Schema\Blueprint;

class CreateCategoryProductTable extends ParentMigration {

    public function up() {
        $this->schema->create('category_product', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id');
            $table->integer('product_id');
        });
    }

    public function down() {
        $this->schema->drop('category_product');
    }
}