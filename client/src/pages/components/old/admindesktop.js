import React from "react";
import { Link } from "react-router-dom";

function NavlinksAdminDesktop() {
  return (
    <React.Fragment>
      <li id="home">
        <Link to="/control" className="blue-text text-darken-4">
          CONTROL PANEL
        </Link>
      </li>
      <li id="orders">
        <Link
          to="/control/orders"
          className="blue-text text-darken-4 dropdown-trigger"
        >
          ORDERS
        </Link>
      </li>
      <li id="products">
        <Link
          to="/control/products"
          className="blue-text text-darken-4 dropdown-trigger"
        >
          PRODUCTS
        </Link>
      </li>
      <li id="categories">
        <Link
          to="/control/categories"
          className="blue-text text-darken-4 dropdown-trigger"
        >
          CATEGORIES
        </Link>
      </li>
    </React.Fragment>
  );
}

export default NavlinksAdminDesktop;
