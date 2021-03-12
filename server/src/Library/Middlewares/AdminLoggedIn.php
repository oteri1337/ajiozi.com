<?php

namespace Server\Library\Middlewares;

use Server\Database\Models\Admin;

class AdminLoggedIn {
    
    public function __invoke($request, $response, $next) {

        $admin_id = $_SESSION['admin']['id'] ?? false;

        if (!$admin_id) {
            return $response->withJson(['errors' => 'please sign in'])->withStatus(401);
        }

        $admin = Admin::where('id', $admin_id)->first();

        if (!$admin) {
            return $response->withJson(['errors' => 'please sign in'])->withStatus(401);
        }

        $request = $request->withAttribute('admin', $admin);

        return $next($request, $response);

    }
    
}
