<?php

namespace Server\Controllers;

use Server\Library\Controllers\ApiController;

use Server\Database\Models\Product;
use Server\Database\Models\Category;

class ProductsController extends ApiController {

    private $products_upload_directory = __DIR__ . '/../../../public_html/images/products/';

    public function __construct() {
        parent::__construct();
        $this->model = new Product;
        $this->search = "title";
    }



    // public function create($request, $response) {

    //     $body = $request->getParsedBody();

    //     $body['title'] = $body['title'] ?? '';
    //     $body['price'] = $body['price'] ?? '';
    //     $body['slug'] = $body['slug'] ?? '';

    //     $rules = [
    //         'title' => [$body['title'], 'required'],
    //         'price' => [$body['price'], 'required|number'],
    //         'url slug' => [$body['slug'], 'required|existsProductSlug']
    //     ];

    //     $this->validator->validate($rules);
        
    //     $errors = $this->validator->errors()->all();

    //     if ($errors) {
    //         return $response->withJson(['errors' => $errors]);
    //     }

    //     $row = $this->model->create($body);
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function list($request, $response) {
    //     $list = $this->model->latest()->paginate(12);
    //     return $response->withJson(['errors' => [], 'data' => $list]);
    // }

    // public function read($request, $response) {
    //     $attr = $request->getAttribute('attr') ?? '';
    //     $row = $this->model->where('slug', $attr)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['not found'], 'data' => []]);
    //     }

    //     $row->categories;

    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function update($request, $response) {

    //     $id = $request->getAttribute('attr');
    //     $row = $this->model->where('id', $id)->first();

    //     if (!$row) {
    //         $errors = ['not found'];
    //         return $response->withJson(['errors' => $errors]);
    //     } 

    //     // Validation
    //     $body = $request->getParsedBody();
    //     $body['slug'] = $body['slug'] ?? '';
    //     $rules = [
    //         'price' => [$body['price'], 'number'],
    //         'url slug' => [$body['slug'], 'takenProductSlug('.$id.')']
    //     ];
    //     $this->validator->validate($rules);
    //     $errors = $this->validator->errors()->all();
    //     if ($errors) {
    //         return $response->withJson(['errors' => $errors]);
    //     }

    //     // Processing
    //     $row->update($body);
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function updateImageOne($request, $response) {

    //     $id = $request->getAttribute('attr');
    //     $row = $this->model->where('id', $id)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['not found.']]);
    //     }

    //     $image = $_FILES['image'] ?? [];
    //     $image['name'] = $image['name'] ?? '';
    //     $image['tmp_name'] = $image['tmp_name'] ?? '';
    //     $image['name'] = strtolower($image['name']);

    //     $nameArray = explode('.', $image['name']);
    //     $extension = end($nameArray);
    //     $allowed = ['jpg','jpeg','png'];
    //     $extension_is_allowed = in_array($extension, $allowed);

    //     if (!$extension_is_allowed) {
    //         return $response->withJson(['errors' => ['invalid file type']]);
    //     }

    //     $unique_id = uniqid('',true);
    //     $name = $unique_id .'.'. $extension;
    //     $destination = $this->products_upload_directory . $name;
    //     $uploaded = move_uploaded_file($image['tmp_name'],$destination);

    //     if (!$uploaded) {
    //         return $response->withJson(['errors' => ['image upload failed']]);
    //     }

    //     $row->update(['image_one' => $name]);

    //     $row->categories;
        
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function updateImageTwo($request, $response) {

    //     $id = $request->getAttribute('attr');
    //     $row = $this->model->where('id', $id)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['not found.']]);
    //     }

    //     $image = $_FILES['image'] ?? [];
    //     $image['name'] = $image['name'] ?? '';
    //     $image['tmp_name'] = $image['tmp_name'] ?? '';
    //     $image['name'] = strtolower($image['name']);

    //     $nameArray = explode('.', $image['name']);
    //     $extension = end($nameArray);
    //     $allowed = ['jpg','jpeg','png'];
    //     $extension_is_allowed = in_array($extension, $allowed);

    //     if (!$extension_is_allowed) {
    //         return $response->withJson(['errors' => ['invalid file type']]);
    //     }

    //     $unique_id = uniqid('',true);
    //     $name = $unique_id .'.'. $extension;
    //     $destination = $this->products_upload_directory . $name;
    //     $uploaded = move_uploaded_file($image['tmp_name'],$destination);

    //     if (!$uploaded) {
    //         return $response->withJson(['errors' => ['image upload failed']]);
    //     }

    //     $row->update(['image_two' => $name]);

    //     $row->categories;
        
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function updateImageThree($request, $response) {

    //     $id = $request->getAttribute('attr');
    //     $row = $this->model->where('id', $id)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['not found.']]);
    //     }

    //     $image = $_FILES['image'] ?? [];
    //     $image['name'] = $image['name'] ?? '';
    //     $image['tmp_name'] = $image['tmp_name'] ?? '';
    //     $image['name'] = strtolower($image['name']);

    //     $nameArray = explode('.', $image['name']);
    //     $extension = end($nameArray);
    //     $allowed = ['jpg','jpeg','png'];
    //     $extension_is_allowed = in_array($extension, $allowed);

    //     if (!$extension_is_allowed) {
    //         return $response->withJson(['errors' => ['invalid file type']]);
    //     }

    //     $unique_id = uniqid('',true);
    //     $name = $unique_id .'.'. $extension;
    //     $destination = $this->products_upload_directory . $name;
    //     $uploaded = move_uploaded_file($image['tmp_name'],$destination);

    //     if (!$uploaded) {
    //         return $response->withJson(['errors' => ['image upload failed']]);
    //     }

    //     $row->update(['image_three' => $name]);

    //     $row->categories;
        
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function deleteImageOne($request, $response) {

    //     $id = $request->getAttribute('attr');
    //     $row = $this->model->where('id', $id)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['not found.']]);
    //     }

    //     $row->update(['image_one' => ""]);
    //     $row->categories;
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function deleteImageTwo($request, $response) {

    //     $id = $request->getAttribute('attr');
    //     $row = $this->model->where('id', $id)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['not found.']]);
    //     }

    //     $row->update(['image_two' => ""]);
    //     $row->categories;
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function deleteImageThree($request, $response) {

    //     $id = $request->getAttribute('attr');
    //     $row = $this->model->where('id', $id)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['not found.']]);
    //     }

    //     $row->update(['image_three' => ""]);
    //     $row->categories;
    //     return $response->withJson(['errors' => [], 'data' => $row]);
    // }

    // public function syncCategories($request, $response) {
    //     $attr = $request->getAttribute('attr') ?? '';
    //     $row = $this->model->where('id', $attr)->first();

    //     if (!$row) {
    //         return $response->withJson(['errors' => ['product not found'], 'data' => []]);
    //     }

    //     $body = $request->getParsedBody();
    //     $body['categories'] = $body['categories'] ?? [];

    //     $row->categories()->sync($body['categories']);
    //     $row->save();

    //     $row->categories;

    //     return $response->withJson(['errors' => [], 'data' => $row]);

    // }


}