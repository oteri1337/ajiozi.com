<?php

namespace Server\Library\Services;

use Violin\Violin;

use Server\Database\Models\User;
use Server\Database\Models\Cart;
use Server\Database\Models\Admin;
use Server\Database\Models\Product;
use Server\Database\Models\Category;
use Server\Database\Models\Categoryproduct;

class Validator extends Violin {

    public function __construct() {

        // Exists --- for creating
        // In Use --- for updating
        // Password Matches Email  --- for authentication

        $this->addRuleMessage('requiredArray', '{field} are required.');
        $this->addRuleMessage('existsUserEmail', 'email already exists.');
        $this->addRuleMessage('existsAdminEmail', 'email already exists.');
        $this->addRuleMessage('existsProductInCart', 'already added to cart');
        $this->addRuleMessage('existsProductsInCart', 'no products in cart');

        $this->addRuleMessage('checkProductId', 'product not found');
        $this->addRuleMessage('checkCategoryId', 'category not found');

        $this->addRuleMessage('existsProductSlug', 'url slug already exists.');
        $this->addRuleMessage('existsCategorySlug', 'category slug already exists');

        $this->addRuleMessage('existsCategoryProduct', 'product already added to category');

        $this->addRuleMessage('takenProductSlug', 'url slug is taken.');
        $this->addRuleMessage('takenCategorySlug', 'url slug is taken.');
        $this->addRuleMessage('inUseUserEmail', 'email already in use.');
        $this->addRuleMessage('inUseAdminEmail', 'email already in use.');

        $this->addRuleMessage('passwordMatchesUserEmail', 'invalid email and password combination');        
        $this->addRuleMessage('passwordMatchesAdminEmail', 'invalid email and password combination');

    }

    public function validate_requiredArray($value, $input, $args) {
        return false;
    }

    public function validate_checkProductId($value, $input, $args) {
        return Product::where('id', $value)->exists();
    }

    public function validate_checkCategoryId($value, $input, $args) {
        return Category::where('id', $value)->exists();
    }

    public function validate_existsProductSlug($value, $input, $args) {
        return !Product::where('slug', $value)->exists();
    }

    public function validate_existsCategorySlug($value, $input, $args) {
        return !Category::where('slug', $value)->exists();
    }

    public function validate_existsCategoryProduct($value, $input, $args) {
        return !Categoryproduct::where('product_id', $value)->where('category_id', $args[0])->exists();
    }



    public function validate_existsAdminEmail($value, $input, $args) {
        return !Admin::where('email', $value)->exists();
    }

    public function validate_existsAdminId($value, $input, $args) {
        return !Admin::where('id', $value)->exists();
    }

    public function validate_existsUserEmail($value, $input, $args) {
        return !User::where('email', $value)->exists();
    }

    public function validate_existsUserId($value, $input, $args) {
        return !User::where('id', $value)->exists();
    }





    public function validate_existsProductInCart($value, $input, $args) {
        return !Cart::where('product_id', $value)->where('user_id', $args[0])->exists();
    }

    public function validate_existsProductsInCart($value, $input, $args) {
        if (!count($value)) {
            return false;
        }
        return true;
    }

    public function validate_inUseUserEmail($value, $input, $args) {
        return User::where('email', $value)->where('id', '!=', $args[0])->exists();
    }

    public function validate_takenProductSlug($value, $input, $args) {
        return !Product::where('slug', $value)->where('id', '!=', $args[0])->exists();
    }

    public function validate_takenCategorySlug($value, $input, $args) {
        return !Category::where('slug', $value)->where('id', '!=', $args[0])->exists();
    }

    // authentication

    public function validate_passwordMatchesAdminEmail($value, $input, $args) {
        return Admin::where('password',$value)->where('email', $args[0])->exists();
    }

    public function validate_passwordMatchesUserEmail($value, $input, $args) {
        return User::where('password',$value)->where('email', $args[0])->exists();
    }
    
}

?>