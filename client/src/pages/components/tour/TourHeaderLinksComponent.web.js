import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Routes";

function HeaderLinksComponent() {
  const store = React.useContext(Context);
  const user = store.state.user;

  const renderAuth = () => {
    if (!store.state.user) {
      return <React.Fragment />;
    }

    return (
      <li>
        <Link to="/user/auth/account.html">
          {user.first_name} {user.last_name}
        </Link>
      </li>
    );
  };

  return (
    <React.Fragment>
      <li>
        <Link to="/contact.html">Contact</Link>
      </li>
      <li>
        <Link to="/products/list.html">Products</Link>
      </li>

      <li>
        <Link
          to="/services.html"
          className="dropdown-trigger"
          data-target="dropdown3"
        >
          Services
        </Link>
      </li>
      <ul id="dropdown3" className="dropdown-content">
        <li>
          <Link to="/services/iot.html">
            Deployments of IoTs and Consultancy
          </Link>
        </li>
        <li>
          <Link to="/services/cctv.html">
            CCTV Installation, Electric Fence & Intercom
          </Link>
        </li>
        <li>
          <Link to="/services/manufacture.html">
            Manufacture of Security Systems
          </Link>
        </li>
        <li>
          <Link to="/services/software.html">
            Cyber Security & Software Engineering
          </Link>
        </li>
      </ul>

      <li>
        <Link
          to="/resources.html"
          className="dropdown-trigger"
          data-target="dropdown2"
        >
          Resources
        </Link>
      </li>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <Link to="/resources/values.html">Values</Link>
        </li>
        <li>
          <Link to="/resources/mission.html">Mission</Link>
        </li>
        <li>
          <Link to="/resources/careers.html">Careers</Link>
        </li>
        <li>
          <Link to="/resources/company.html">Company</Link>
        </li>
        <li>
          <Link to="/resources/leadership.html">Leadership</Link>
        </li>
      </ul>

      {renderAuth()}
    </React.Fragment>
  );
}

export default HeaderLinksComponent;
