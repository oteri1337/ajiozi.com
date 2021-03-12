<?php

namespace Server\Controllers\Services;

use Slim\Csrf\Guard;

class CsrfExtension extends \Twig_extension {

    protected $guard;

    public function __construct(Guard $guard) {
        $this->guard = $guard;
    }
    
    public function getFunctions() {
        return [
            new \Twig_SimpleFunction('csrf_field', [$this,'csrfField'])
        ];
    }

    public function csrfField() {
        $nameKey = $this->guard->getTokenNameKey();
        $valueKey = $this->guard->getTokenValueKey();

        $name = $this->guard->getTokenName();
        $value = $this->guard->getTokenValue();

        return "
        
            <input type='hidden' name='{$nameKey}' value={$name}>
            <input type='hidden' name='{$valueKey}' value={$value}>

        ";
    }
    
}

?>