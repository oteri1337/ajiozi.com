<?php 

use Server\Database\Migrations\ParentMigration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrderProductTable extends ParentMigration {

    public function up() {
        $this->schema->create('order_product', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('order_id');
            $table->integer('product_id');
            $table->integer('quantity');
            $table->double('price',11,2);
        });
    }

    public function down() {
        $this->schema->drop('order_product');
    }
}