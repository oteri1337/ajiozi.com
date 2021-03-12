<?php

namespace Server\Database\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model {
    
    protected $fillable = [
        'email',
        'password',
        'phone_number',
        'first_name',
        'last_name',
        'other_name',
        'gender',
        'occupation',
        'city',
        'state',
        'country',
        'post_code',
        'address',
        'photo_profile',
        'email_token',
        'password_token',
        'email_verified',
        'identity_verified',
    ];

    protected $hidden = [
        'password',
        'verification_code',
        'is_verified',
        'two_factor_auth',
        'token',
        'token_expires',
        'created_at',
        'updated_at'
    ];

    public function orders() {
        return $this->hasMany(Order::class);
    }

    public function pending_orders() {
        return $this->hasMany(Order::class)->where('delivery_status', '0');
    }

    public function completed_orders() {
        return $this->hasMany(Order::class)->where('delivery_status', '1');
    }

    // public function getCart() {
    //     return $_SESSION['user']['cart'] ?? [];
    // }
    
}

