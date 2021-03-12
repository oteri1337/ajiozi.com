import React from "react";
import { Link } from "react-router-dom";
import { useScroll, APP_NAME, Context, signOut } from "../../Routes";
import HeaderLinksComponent from "./UserHeaderLinksComponent";
import MobileLinksComponent from "./UserMobileLinksComponent";
import UtilTranslatorComponent from "./UtilTranslatorComponent";
import Office from "../../assets/images/Office.jpg";

function UserHeaderComponent() {
  const { className } = useScroll();
  const store = React.useContext(Context);
  const user = store.state.user;

  React.useLayoutEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });

  return (
    <header>
      <div className="app-primary-background">
        <div className="navbar-fixed">
          <nav className={className}>
            <div className="nav-wrapper">
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

              <Link to="/user" className="brand-logo app-px-3-5 ">
                {APP_NAME}
              </Link>

              <ul id="nav-mobile" className="right">
                <UtilTranslatorComponent />
                <li>
                  <a onClick={event => signOut(event, store)}>
                    <span className="material-icons notranslate">
                      power_settings_new
                    </span>
                  </a>
                </li>
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
              <img src={`/${Office}`} />
            </div>
            <a href="#user">
              <img
                className="circle"
                src={`/uploads/images/${user.photo_profile}`}
              />
            </a>
            <Link to="/user/profile">
              <span className="white-text name">
                {user.first_name} {user.last_name}
              </span>
            </Link>
            <Link to="/user/profile">
              <span className="white-text email">{user.email}</span>
            </Link>
          </div>
        </li>
        <MobileLinksComponent />
      </ul>
    </header>
  );
}

export default UserHeaderComponent;
