<?php

namespace Server\Controllers;

use Server\Library\Controllers\ApiController;
use Server\Database\Models\Order;
use Unirest\Request\Body;

class OrdersController extends ApiController {

    public function __construct() {
        parent::__construct();
        $this->model = new Order;
    }

    public function relationships($row) {
        $row->products;
        return $row;
    }

    public function verifyPayment($request, $response) {
        $body = $request->getParsedBody();
        $id = $body['id'] ?? '';
        $txref = $body['txref'] ?? '';

        $rules = [
            'id' => [$id, 'required'],
            'txref' => [$txref, 'required'],
        ];
        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if ($errors) {
            $this->data['errors'] = $errors;
            return $response->withJson($this->data);
        }

        $order = $this->model->where('id', $id)->first();
        if (!$order) {
            $this->data['errors'] = ['Order Not Found'];
            return $response->withJson($this->data);
        }

        $data = [
            'txref' => $txref,
            'SECKEY' => getenv("FLUTTERWAVE_SECRET_KEY")
        ];

        $headers = array('Content-Type' => 'application/json');
        $body = Body::json($data);
        $url = "https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/verify"; 

        $unirestResponse = \Unirest\Request::post($url, $headers, $body);

        //check the status is success
        if ($unirestResponse->body->data->status === "success" && $unirestResponse->body->data->chargecode === "00") {
            //confirm that the amount is the amount you wanted to charge
            if ($unirestResponse->body->data->amount !== $order->total) {
                $this->data['errors'] = ['Payment Verification Failed'];
                return $response->withJson($this->data);
            }
        }

        $order->update(['payment_status' => 1]);
        $order = $this->model->where('id', $id)->first();
        $order = $this->relationships($order);

        $this->data['data'] = $order;
        return $response->withJson($this->data);
    }




}