import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Routes";

function MobileLinksComponent() {
  React.useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }, []);

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
      {renderAuth()}
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="active">
            <a className="collapsible-header">
              Pages
              <i className="material-icons notranslate">arrow_drop_down</i>
            </a>
            <div className="collapsible-body">
              <ul>
                <li>
                  <Link to="/contact.html" className="sidenav-close">
                    <span className="material-icons notranslate">email</span>
                    Contact
                  </Link>
                </li>

                <li>
                  <Link to="/products/list.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      insert_drive_file
                    </span>
                    Products
                  </Link>
                </li>

                <li>
                  <Link to="/resources.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      insert_drive_file
                    </span>
                    Resources
                  </Link>
                </li>

                <li>
                  <Link to="/services.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      insert_drive_file
                    </span>
                    Services
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
              Services
              <i className="material-icons notranslate">arrow_drop_down</i>
            </a>
            <div className="collapsible-body">
              <ul>
                <li>
                  <Link to="/services/iot.html" className="sidenav-close">
                    <span className="material-icons notranslate">adb</span>
                    Deployments of IoTs
                  </Link>
                </li>
                <li>
                  <Link to="/services/cctv.html" className="sidenav-close">
                    <span className="material-icons notranslate">camera</span>
                    CCTV Installation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/manufacture.html"
                    className="sidenav-close"
                  >
                    <span className="material-icons notranslate">payment</span>
                    Security Systems
                  </Link>
                </li>
                <li>
                  <Link to="/services/software.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      devices_other
                    </span>
                    Cyber Security
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
              Resources
              <i className="material-icons notranslate">arrow_drop_down</i>
            </a>
            <div className="collapsible-body">
              <ul>
                <li>
                  <Link to="/resources/values.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      assessment
                    </span>
                    Values
                  </Link>
                </li>
                <li>
                  <Link to="/resources/mission.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      assessment
                    </span>
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="/resources/careers.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      assessment
                    </span>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/resources/company.html" className="sidenav-close">
                    <span className="material-icons notranslate">
                      assessment
                    </span>
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources/leadership.html"
                    className="sidenav-close"
                  >
                    <span className="material-icons notranslate">
                      assessment
                    </span>
                    Leadership
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </React.Fragment>
  );
}

export default MobileLinksComponent;
