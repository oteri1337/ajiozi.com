<?php

namespace Server\Library\Services;

use PHPMailer\PHPMailer\PHPMailer;

class Mailer extends PHPMailer {
    
    public function setConfig() {
        $name = getenv("MAIL_NAME");
        $email = getenv("MAIL_USERNAME");
        $this->isSMTP();
        $this->isHTML(true);
        $this->SMTPDebug = getenv("MAIL_ERRORS");
        $this->Host = getenv("MAIL_HOST");
        $this->Port = getenv("MAIL_PORT");
        $this->SMTPAuth = true;
        $this->Username = $email;
        $this->Password = getenv("MAIL_PASSWORD");
        $this->setFrom($email, $name);
        $this->addReplyTo($email, $name);
    }

    public function sendSingle($email, $subject, $body) {
        $this->addAddress($email);
        $this->Subject = $subject;
        $this->Body = $body;
        return $sent = $this->send();
    }

}