<?php

namespace Server\Database\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model {
    
    protected $fillable = ['email','password'];

    protected $hidden = ['password'];
    
}

