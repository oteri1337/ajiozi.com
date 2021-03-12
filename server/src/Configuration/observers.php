<?php

use Server\Database\Models\User;
use Server\Database\Models\Admin;
use Server\Database\Models\Product;
use Server\Database\Models\Category;
use Server\Database\Models\Order;

use Server\Database\Observers\UserObserver;
use Server\Database\Observers\AdminObserver;
use Server\Database\Observers\ProductObserver;
use Server\Database\Observers\CategoryObserver;
use Server\Database\Observers\OrderObserver;

User::observe(new UserObserver);
Admin::observe(new AdminObserver);
Product::observe(new ProductObserver);
Category::observe(new CategoryObserver);
Order::observe(new OrderObserver);