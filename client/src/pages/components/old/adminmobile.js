import React from "react";
import { Link } from "react-router-dom";

function NavlinksAdminMobile() {
  return (
    <React.Fragment>
      <li id="home">
        <Link to="/control" className="blue-text text-darken-4">
          CONTROL PANEL
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
    </React.Fragment>
  );
}

export default NavlinksAdminMobile;
