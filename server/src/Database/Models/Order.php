<?php

namespace Server\Database\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    
    protected $fillable = [
        'user_id',
        'recipient_name',
        'recipient_email',
        'recipient_phone_number',
        'delivery_address',
        'payment_method',
        'total',
        'delivery_status',
        'payment_status',
        'txref'
    ];

    protected $hidden = [
        'user_id',
    ];

    public function getDeliveryStatusAttribute($col) {

        if ($col === 0) {
            return "Pending";
        }

        if ($col === 1) {
            return "Completed";
        }

        if ($col === 2) {
            return "Cancelled";
        }

    }

    public function getPaymentMethodAttribute($col) {

        if ($col === 1) {
            return "Online Payment";
        }

        if ($col === 2) {
            return "Pay On Delivery";
        }

    }

    public function getPaymentStatusAttribute($col) {

        if ($col === 0) {
            return "Pending";
        }

        if ($col === 1) {
            return "Paid";
        }

        if ($col === 2) {
            return "Cancelled";
        }

    }

    public function products(){
        return $this->belongsToMany(Product::class)->withPivot('quantity', 'price');;
    }
    
}

