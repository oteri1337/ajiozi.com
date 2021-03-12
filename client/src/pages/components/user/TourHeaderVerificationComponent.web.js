import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import { APP_NAME, Context, signOut } from "../../Routes";

function HeaderComponent() {
  React.useLayoutEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });

  const store = React.useContext(Context);
  const user = store.state.user;

  return (
    <React.Fragment>
      <div className="app-primary-background">
        <div className="navbar-fixed">
          <nav>
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

              <Link to="/" className="brand-logo app-px-3-5">
                <img
                  src="/images/logos/main.png"
                  className="ajiozi-logo"
                  alt="logo"
                />
              </Link>

              <ul id="nav-mobile" className="right">
                <li id="signin material-icons notranslate">
                  <a onClick={event => signOut(event, store)}>
                    <span className="material-icons notranslate">
                      power_settings_new
                    </span>
                  </a>
                </li>
              </ul>

              <ul className="right hide-on-med-and-down">
                <li>
                  <a>
                    {user.first_name} {user.last_name}
                  </a>
                </li>
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
                  paddingLeft: "2rem"
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
        <li>
          <a className="subheader">
            {user.first_name} {user.last_name}
          </a>
        </li>
        <li>
          <a onClick={event => signOut(event, store)}>
            <span className="material-icons notranslate">
              power_settings_new
            </span>
            Logout
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default HeaderComponent;
