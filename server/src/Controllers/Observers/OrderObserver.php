<?php

namespace Server\Database\Observers;

use Server\Services\Mailer;
use Server\Database\Models\Admin;

class OrderObserver {

    public function created($row) {

        // //send confirmation email to user
        // $mailer =  new Mailer;
        // $mailer->provider->addAddress($row->email);
        // $mailer->provider->Subject = "Order Confirmation";
        // $mailer->provider->Body = "
        
        //     Your order has successfully been recieved with the following information

        //     TOTAL ". $order->total ."
        //     PAYMENT METHOD ". $order->payment_method ."
        //     MOBILE NUMBER ". $order->mobile ."
        //     RECIEVER'S EMAIL ". $order->email ."
        //     RECIEVER'S FULL NAME ". $order->full_name ."
        //     DELIVERY ADDRESS ". $order->address ."
        
        // ";
        // $mailer->provider->send();


        // // send confirmation email to admin
        // $admins = Admin::get()->toArray();

        // foreach ($admins as $admin) {
        //     $mailer->provider->addAddress($admin['email']);
        // }

        // $mailer->provider->Subject = "New Order";
        // $mailer->provider->Body = "
        
        //     An order has been placed on your website with the following information

        //     TOTAL ". $order->total ."
        //     PAYMENT METHOD ". $order->payment_method ."
        //     MOBILE NUMBER ". $order->mobile ."
        //     RECIEVER'S EMAIL ". $order->email ."
        //     RECIEVER'S FULL NAME ". $order->full_name ."
        //     DELIVERY ADDRESS ". $order->address ."
        
        // ";
        // $mailer->provider->send();
    }

}