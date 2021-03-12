<?php 

use Server\Database\Migrations\ParentMigration;
use Illuminate\Database\Schema\Blueprint;

class CreateOrdersTable extends ParentMigration {

    public function up() {
        $this->schema->create('orders', function(Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('recipient_name');
            $table->string('recipient_phone_number');
            $table->string('recipient_email');
            $table->string('delivery_address');
            $table->boolean('payment_method');
            $table->float('total',11,2);
            $table->string('tracking_code')->nullable();
            $table->boolean('payment_status');
            $table->boolean('delivery_status');            
            $table->timestamps();
        });
    }

    public function down() {
        $this->schema->drop('orders');
    }
}