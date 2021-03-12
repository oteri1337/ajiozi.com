import React from "react";
import { Link } from "react-router-dom";

//import withContext from "../../hoc/withContext";
import NavlinksAdminDesktop from "../old/admindesktop";
import NavlinksAdminMobile from "../old/adminmobile";

class AdminHeader extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav className="white">
            <div className="white">
              <div className="container">
                <Link
                  to="/"
                  data-target="slide-out"
                  className="sidenav-trigger"
                >
                  <i className="material-icons blue-text text-darken-4 ajiozi-burger-nav">
                    menu
                  </i>
                </Link>

                <Link to="/" id="menu">
                  <img
                    src="/images/logos/main.png"
                    className="ajiozi-logo"
                    alt="logo"
                  />
                </Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <NavlinksAdminDesktop />

                  {this.renderAuth()}
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="/images/logos/main.png" />
              </div>
              <br />
              <br />
            </div>
          </li>

          <NavlinksAdminMobile />
          {this.renderAuth()}
        </ul>
      </React.Fragment>
    );
  };

  componentDidMount = () => {
    var sidenav_elems = document.querySelectorAll(".sidenav");
    var sidenav_options = {};
    M.Sidenav.init(sidenav_elems, sidenav_options);
  };

  renderAuth = () => {
    if (this.props.context.admin_logged) {
      return (
        <React.Fragment>
          <li id="signout">
            <a onClick={this.signOutAdmin} className="blue-text text-darken-4">
              SIGN OUT
            </a>
          </li>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <li id="signin">
          <Link to="/signin" className="blue-text  text-darken-4">
            SIGN IN
          </Link>
        </li>
        <li id="signup">
          <Link to="/signup" className="blue-text  text-darken-4">
            SIGN UP
          </Link>
        </li>
      </React.Fragment>
    );
  };

  signOutUser = async () => {
    this.props.context.signOutUser();
    this.render();
  };
}

export default AdminHeader;
