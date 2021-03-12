import React from "react";
import { Link } from "react-router-dom";

function DropdownAbout() {
  return (
    <React.Fragment>
      <ul id="resources" className="dropdown-content">
        <li>
          <Link to="/resources/careers" className="blue-text">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/resources/values" className="blue-text">
            Values
          </Link>
        </li>

        <li>
          <Link to="/resources/mission" className="blue-text">
            Mission
          </Link>
        </li>
        <li>
          <Link to="/resources/company" className="blue-text">
            Company
          </Link>
        </li>
        <li>
          <Link to="/resources/leadership" className="blue-text">
            Leadership
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default DropdownAbout;
