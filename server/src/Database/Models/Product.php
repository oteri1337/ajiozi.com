<?php 

namespace Server\Database\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model {

    protected $fillable = [
        'title', 
        'slug',
        'price', 
        'stock',
        'description', 
        'image_one', 
        'image_two',
        'image_three'
    ];

    public function getImageOneAttribute($col) {

        if ($col === "") {
            return $col;
        }

        return getenv('APP_URL').'/images/products/'.$col;
    }

    public function getImageTwoAttribute($col) {

        if ($col === "") {
            return $col;
        }

        return getenv('APP_URL').'/images/products/'.$col;
    }

    public function getImageThreeAttribute($col) {

        if ($col === "") {
            return $col;
        }

        return getenv('APP_URL').'/images/products/'.$col;
    }

    public function getDescriptionAttribute($col) {
        return nl2br($col);
    }

    public function getPriceStringAttribute() {
        return number_format($this->price,2);
    }

    public function categories(){
        return $this->belongsToMany(new Category);
    }

}
