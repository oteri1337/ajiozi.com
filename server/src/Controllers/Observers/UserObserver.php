<?php

namespace Server\Database\Observers;

class UserObserver {

    public function creating($row) {
        $row->email = $row->email;
        $row->password = sha1($row->password);
    }

}