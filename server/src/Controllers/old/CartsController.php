<?php

namespace Server\Controllers;

use Server\Controllers\Library\ServicesController;
use Server\Database\Models\Order;
use Server\Database\Models\Product;
use Server\Database\Models\Orderproduct;

class CartsController extends ServicesController
{

    public function addToCart($request, $response) {

        // Collection
        $user = $request->getAttribute('user');
        $body = $request->getParsedBody();
        $body['product_id'] =  $body['product_id'] ?? false;
        $body['quantity'] = $body['quantity'] ?? 1;


        // Validation
        $rules = ['product id' => [$body['product_id'], 'required|number']];
        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        // check if product is already in cart

        $product = Product::where('id', $body['product_id'])->first()->toArray();
        $_SESSION['user']['cart'][] = $product;
        $user['cart'] = $_SESSION['user']['cart'];

        return $response->withJson(['errors' => [], 'data' => $user]);
    }
    
    public function removeFromCart($request, $response) {

        $user = $request->getAttribute('user');
        $body = $request->getParsedBody();
        $body['product_id'] =  $body['product_id'] ?? false;

        $newCart = array_filter($_SESSION['user']['cart'], function($item) use ($body) {
            if ($item['id'] != $body['product_id']) {
                return true;
            }
         });

        $_SESSION['user']['cart'] = array_merge([], $newCart);
        $user['cart'] = $_SESSION['user']['cart'];

        return $response->withJson(['errors' => [], 'data' => $user]);
    }
    
    public function clearCart($request, $response) {
        $user = $request->getAttribute('user');

        $_SESSION['user']['cart'] = [];
        $user->cart = $_SESSION['user']['cart'];
        
        return $response->withJson(['errors' => [], 'data' => $user]);
    }

    public function getCost($request, $response) {

        $body = $request->getParsedBody();
        $productsFormCart = $body["products"] ?? [];


        $products_total = 0.00;
        $shipping_total = 0.00;
        $sum_total = 0.00;

        foreach ($productsFormCart as $productFromCart) {

            $productFromDb = Product::where('id', $productFromCart['id'])->first();
            if (!$productFromDb) {
                return $response->withJson(['errors' => 'product not found']);
            }

            $productPrice = $productFromDb->price * $productFromCart['quantity'];
            $products_total += $productPrice;
        } 

        $sum_total = $products_total + $shipping_total;

        $data = [
            'products' => number_format($products_total,2),
            'shipping' => number_format($shipping_total,2),
            'sum' => number_format($sum_total,2)
        ];

        return $response->withJson(['errors' => [], 'data' => $data]);
    }

}