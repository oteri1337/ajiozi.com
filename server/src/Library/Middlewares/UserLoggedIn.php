<?php

namespace Server\Library\Middlewares;

use Server\Database\Models\User;

class UserLoggedIn {
    
    public function __invoke($request, $response, $next) {

        $user_id = $_SESSION['user']['id'] ?? false;

        if (!$user_id) {
            return $response->withJson(['errors' => 'please sign in'])->withStatus(401);
        }

        $user = User::where('id', $user_id)->first();

        if (!$user) {
            return $response->withJson(['errors' => 'please sign in'])->withStatus(401);
        }

        $request = $request->withAttribute('user', $user);

        return $next($request, $response);

    }
    
}
