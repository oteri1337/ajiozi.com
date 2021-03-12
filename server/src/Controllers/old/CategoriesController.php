<?php

namespace Server\Controllers;

use Server\Database\Models\Category;

class CategoriesController extends ParentController 

{

    public function __construct() {
        parent::__construct();
        $this->model = new Category;
    }

    public function create($request, $response) {

        $body = $request->getParsedBody();
        $body['title'] = $body['title'] ?? '';
        $body['slug'] = $body['slug'] ?? '';

        $rules = [
            'title' => [$body['title'], 'required'],
            'url slug' => [$body['slug'], 'required|existsCategorySlug']
        ];

        $this->validator->validate($rules);
        
        $errors = $this->validator->errors()->all();

        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        $row = $this->model->create($body);

        return $response->withJson(['errors' => [], 'data' => $row]);
    }

    public function read($request, $response) {
        $attribute = $request->getAttribute('attr') ?? '';
        $row = $this->model->where('slug', $attribute)->first();
        $row->products;

        if (!$row) {
            return $response->withJson(['errors' => ['order not found'], 'data' => []]);
        }

        return $response->withJson(['errors' => [], 'data' => $row]);
    }

    public function update($request, $response) {
        $attr = $request->getAttribute('attr');
        $row = $this->model->where('slug', $attr)->first();
        
        if (!$row) {
            return $response->withJson(['errors' => ['category not found']]);
        } 

        // Validation
        $body = $request->getParsedBody();
        $rules = [
            'title' => [$body['title'], 'required'],
            'url slug' => [$body['slug'], 'takenCategorySlug('.$attr.')']
        ];
        
        $this->validator->validate($rules);
        $errors = $this->validator->errors()->all();
        if ($errors) {
            return $response->withJson(['errors' => $errors]);
        }

        // Processing
        $row->update($body);
        return $response->withJson(['errors' => [], 'data' => $row]);
    }

    public function list($request, $response) {
        $list = $this->model->get();
        return $response->withJson(['errors' => [], 'data' => ['data' => $list]]);
    }

}