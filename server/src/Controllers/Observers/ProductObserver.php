<?php

namespace Server\Database\Observers;

class ProductObserver {

    public function creating($row) {
        $row->slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/','-',$row->slug)));
    }

}