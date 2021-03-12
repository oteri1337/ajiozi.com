import React from "react";
import { Link } from "react-router-dom";

class NavlinksMobile extends React.Component {
  // componentDidMount = () => {
  //   let elems = document.querySelectorAll(".collapsible");
  //   let instances = M.Collapsible.init(elems, {});
  // };

  render = () => {
    return (
      <React.Fragment>
        <li id="home">
          <Link to="/">Home</Link>
        </li>
        <li id="contact">
          <Link to="/contact">Contact</Link>
        </li>
        <li id="products">
          <Link to="/products">Products</Link>
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li className="active">
              <a className="collapsible-header">
                Services<i className="material-icons">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Link to="/services/iot">IOT Deployments</Link>
                  </li>
                  <li>
                    <Link to="/services/software">Cyber Security</Link>
                  </li>
                  <li>
                    <Link to="/services/cctv">CCTV Installation</Link>
                  </li>
                  <li>
                    <Link to="/services/manufacture">
                      Security System Manufacture
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li className="active">
              <a className="collapsible-header">
                Resources<i className="material-icons">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <Link to="/resources/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/resources/values">Values</Link>
                  </li>
                  <li>
                    <Link to="/resources/mission">Mission</Link>
                  </li>
                  <li>
                    <Link to="/resources/company">Company</Link>
                  </li>
                  <li>
                    <Link to="/resources/leadership">Leadership</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </React.Fragment>
    );
  };
}

export default NavlinksMobile;
