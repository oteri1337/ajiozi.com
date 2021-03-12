import React from "react";
import { Link } from "react-router-dom";

function NavlinksDesktop() {
  return (
    <React.Fragment>
      <li id="contact">
        <Link to="/contact" className="blue-text text-darken-4">
          Contact
        </Link>
      </li>
      <li id="products">
        <Link
          to="/products"
          className="blue-text text-darken-4 dropdown-trigger"
        >
          Products
        </Link>
      </li>
      <li id="services">
        <Link
          to="/services"
          className="blue-text text-darken-4 dropdown-trigger"
          data-target="services"
        >
          Services
        </Link>
      </li>
      <li id="resources">
        <Link
          to="/resources"
          className="blue-text text-darken-4 dropdown-trigger"
          data-target="resources"
        >
          Resources
        </Link>
      </li>
    </React.Fragment>
  );
}

export default NavlinksDesktop;
