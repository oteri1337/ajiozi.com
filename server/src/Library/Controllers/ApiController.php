<?php

namespace Server\Library\Controllers;

class ApiController extends ServicesController {
    
    protected $model;
    protected $attr;
    protected $data;
    protected $search;

    
    public function __construct() {
        parent::__construct();
        $this->attr = 'id';
        $this->data =  [
            'errors' => [],
            'message' => "",
            'data' => []
        ];
    }

    protected function relationships($row) {
        return $row;
    }

    protected function filter($body, $keysWhitelist) {
        return array_filter($body, function($item, $key) use ($keysWhitelist) {
            return in_array($key, $keysWhitelist);
        }, ARRAY_FILTER_USE_BOTH);
    }

    public function create($request, $response) {
        $body = $request->getParsedBody();
        $rules = $this->createRules($body);

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if($errors) {
            return $response->withJson(['errors' =>  $errors, 'data' => '']);
        }

        $cleanBody = $this->createBody($body);
        $row = $this->model->create($cleanBody);
        $row = $this->relationships($row);

        return $response->withJson(['errors' =>  [], 'data' => $row]);
    }

    public function update($request, $response) {
        $body = $request->getParsedBody();
        $attr = $body[$this->attr];
        $rules = $this->updateRules($body);

        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();

        if($errors) {
            return $response->withJson(['errors' =>  $errors, 'data' => []]);
        }

        $row = $this->model->where($this->attr, $attr)->first();
        if (!$row) {
            return $response->withJson(['errors' => ['not found'], 'data' => []]);
        }
        
        $cleanBody = $this->updateBody($body);
        $row = $row->update($cleanBody);
        return $response->withJson(['errors' =>  [], 'data' => $row]);
    }

    public function read($request, $response) {
        $attr = $request->getAttribute('attr');

        $row = $this->model->where($this->attr, $attr)->first();
        if (!$row) {
            return $response->withJson(['errors' => ['not found'], 'data' => []]);
        }

        $row = $this->relationships($row);

        return $response->withJson(['errors' => [], 'data' => $row]);
    }

    public function delete($request, $response) {
        $body = $request->getParsedBody();
        $attr = $body[$this->attr];

        $row = $this->model->where($this->attr, $attr)->first();

        if (!$row) {
            return $response->withJson(['errors' => ['not found'], 'data' => []]);
        }

        $row = $row->delete();

        return $response->withJson(['errors' => [], 'data' => $row]);
    }

    public function list($request, $response) {
        $rows = $this->model->latest()->paginate(12);
        return $response->withJson(['errors' => [], 'data' => $rows]);
    }

    public function search($request, $response) {
        $body = $request->getParsedBody();
        $attr = $body['search'] ?? '';

        $row = $this->model->where($this->search, 'LIKE', "%{$attr}%")->paginate('12');

        $this->data['data'] = $row;
        return $response->withJson($this->data);
    }
    
}