<?php

namespace Server\Controllers;

use Server\Library\Controllers\AuthController;
use Server\Database\Models\User;
use Server\Database\Models\Product;
use Server\Database\Models\Order;


class UsersController extends AuthController 
{ 

    public function __construct() {
        parent::__construct();
        $this->model = new User;
        $this->authKey = 'user';
    }

    public function createRules($body) {
        $body['email'] = $body['email'] ?? '';
        $body['password'] = $body['password'] ?? '';
        $body['confirm_password'] = $body['confirm_password'] ?? '';

        return [
            'email' => [$body['email'], 'email|required|checkIfEmailAlreadyExists'],
            'password' => [$body['password'], 'required|min(7)'],
            'password confirmation' => [$body['confirm_password'], 'required|matches(password)'],
        ];
    }

    public function createBody($body) {
        return $this->filter($body, ['email','password','phone_number','first_name','last_name','other_name','occupation','city','state','country','post_code','address',]);
    }

    public function relationships($row) {
        $row->cart = $_SESSION['user']['cart'] ?? [];
        $row->orders;
        return $row;
    }

    public function addToCart($request, $response) {

        $user = $request->getAttribute('user');
        $body = $request->getParsedBody();
        $product_id =  $body['product_id'] ?? false;
        $body['quantity'] = $body['quantity'] ?? 1;

        // Validation
        $rules = ['product id' => [$product_id, 'required|number']];
        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        $product = Product::where('id', $body['product_id'])->first()->toArray();
        $_SESSION['user']['cart'][] = $product;

        $user = $this->relationships($user);

        $this->data['data'] = $user;
        return $response->withJson($this->data);
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
        $user = $this->relationships($user);

        return $response->withJson(['errors' => [], 'data' => $user]);
    }

    public function getCartCost($request, $response) {

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

    public function createOrder($request, $response) {
        $user = $request->getAttribute('user');
        $body = $request->getParsedBody();
        $recipient_name = $body['recipient_name'] ?? '';
        $recipient_email = $body['recipient_email'] ?? '';
        $delivery_address = $body['delivery_address'] ?? '';
        $payment_method = $body['payment_method'] ?? '';

        $rules = [
            'recipient_name' => [$recipient_name, 'required'],
            'recipient_email' => [$recipient_email, 'required'],
            'delivery_address' => [$delivery_address, 'required'],
            'payment_method' => [$payment_method, 'required']
        ];
        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        $products = $body['cart'] ?? [];
        $products = $this->getProductPricesFromDatabase($products);

        $body['user_id'] = $user->id;
        $body['total'] = $this->getCartTotal($products);

        $cleanbody = $this->filter($body, ['user_id','recipient_name','recipient_email','recipient_phone_number','delivery_address','payment_method','total']);
        $order = Order::create($cleanbody);

        foreach ($products as $product) {
            $order->products()->attach($product['id'], ['quantity' => $product['quantity'], 'price' => $product['price']]);
        }

        $_SESSION['user']['cart'] = [];

        $user = $this->relationships($user);
        $this->data['id'] = $order->id;
        $this->data['data'] = $user;
        return $response->withJson($this->data);
    }

    private function getCartTotal($productsFromCart) {
        $products_total = 0.00;
        $shipping_total = 0.00;
        $sum_total = 0.00;

        foreach ($productsFromCart as $productFromCart) {
            $productFromDb = Product::where('id', $productFromCart['id'])->first();
            if ($productFromDb) {
                $productPrice = $productFromDb->price * $productFromCart['quantity'];
                $products_total += $productPrice;
            }
        } 

        return $sum_total = $products_total + $shipping_total;
    }

    private function getProductPricesFromDatabase($productsFromCart) {

        foreach ($productsFromCart as &$productFromCart) {
            $productFromDb = Product::where('id', $productFromCart['id'])->first();
            if ($productFromDb) {
                $productFromCart['price'] = $productFromDb->price;
            }
        } 

        return $productsFromCart;
    }

}

?>