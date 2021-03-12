import React from "react";
import { Link } from "react-router-dom";
import { Context, signOut } from "../../../Routes";
import HeaderLinksComponent from "./TourHeaderLinksComponent";
import MobileLinksComponent from "./TourMobileLinksComponent";
import UtilTranslatorComponent from "../utilities/UtilTranslatorComponent";
import Logo from "../../../assets/images/logo3.png";

function HeaderComponent() {
  const store = React.useContext(Context);
  const user = store.state.user;

  React.useLayoutEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }, []);

  const renderAuth = () => {
    if (user) {
      return (
        <React.Fragment>
          <UtilTranslatorComponent />
          <li>
            <Link
              to="/user/shop/cart.html"
              className="blue-text  text-darken-4"
            >
              <i className="material-icons">shopping_cart</i>
              <span>({user.cart?.length})</span>
            </Link>
          </li>
          <li className="hide-on-small-only">
            <Link
              to="/user/shop/orders.html"
              className="blue-text  text-darken-4"
            >
              <i className="material-icons">local_shipping</i>
              <span>({user.orders?.length})</span>
            </Link>
          </li>
          <li>
            <a onClick={(event) => signOut(event, store)}>
              <span className="material-icons notranslate">
                power_settings_new
              </span>
            </a>
          </li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <UtilTranslatorComponent />
        <li id="signin material-icons">
          <Link
            to="/user/auth/signin.html"
            className="blue-text  text-darken-4"
          >
            <i className="material-icons">account_circle</i>
          </Link>
        </li>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="app-primary-background">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper ">
              <ul>
                <li>
                  <a
                    data-target="mobile-demo"
                    className="sidenav-trigger show-on-large"
                  >
                    <span className="material-icons notranslate">menu</span>
                  </a>
                </li>
              </ul>

              <Link to="/" className="brand-logo app-px-3-5">
                <img
                  src={"/" + Logo}
                  alt="Ajiozi Logo"
                  style={{ verticalAlign: "middle" }}
                />
              </Link>

              <ul id="nav-mobile" className="right">
                {renderAuth()}
                {/* <UtilTranslatorComponent />
                <li id="signin material-icons notranslate">
                  <Link to="/user/auth/signin.html">
                    <span className="material-icons notranslate">
                      account_circle
                    </span>
                  </Link>
                </li> */}
              </ul>

              <ul className="right hide-on-med-and-down">
                <HeaderLinksComponent />
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <div className="user-view">
            <div className="background">
              <img
                src={"/" + Logo}
                style={{
                  height: "25vh",
                  padding: "1rem",
                  paddingLeft: "2rem",
                }}
              />
            </div>
            <br />
            <br />
            <br />
          </div>
        </li>
        <li>
          <div className="divider" />
        </li>
        <MobileLinksComponent />
      </ul>
    </React.Fragment>
  );
}

export default HeaderComponent;
