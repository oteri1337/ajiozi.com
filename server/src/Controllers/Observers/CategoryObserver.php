<?php

namespace Server\Database\Observers;

class CategoryObserver {

    public function creating($row) {
        $row->title = ucfirst($row->title);
        $row->slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/','-',$row->slug)));
    }

}