<?php

namespace Server\Database\Observers;

class AdminObserver {

    public function creating($row) {
        $row->password = sha1($row->password);
    }

}