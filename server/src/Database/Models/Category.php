<?php

namespace Server\Database\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    
    protected $fillable = [
        'title',
        'slug'
    ];

    protected $table = 'categories';

    public function products() {
        return $this->belongsToMany(new Product);
    }
    
}

