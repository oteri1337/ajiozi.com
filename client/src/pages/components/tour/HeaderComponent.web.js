import React from "react";
import { Link } from "react-router-dom";
import HeaderLinksComponent from "./TourHeaderLinksComponent";
import MobileLinksComponent from "./TourMobileLinksComponent";
import UtilTranslatorComponent from "../utilities/UtilTranslatorComponent";
import { Context, signOut } from "../../../Routes";
import Logo from "../../../assets/images/logo3.png";

function HeaderComponent() {
  const store = React.useContext(Context);

  React.useLayoutEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });

  const renderAuth = () => {
    if (store.state.user) {
      return (
        <React.Fragment>
          <UtilTranslatorComponent />
          <li>
            <Link
              to="/user/shop/cart.html"
              className="blue-text  text-darken-4"
            >
              <i className="material-icons">shopping_cart</i>
              <span>({store.state.user.cart.length})</span>
            </Link>
          </li>
          <li className="hide-on-small-only">
            <Link
              to="/user/shop/orders.html"
              className="blue-text  text-darken-4"
            >
              <i className="material-icons">local_shipping</i>
              <span>({Object.keys(store.state.user.orders).length})</span>
            </Link>
          </li>
          <li>
            <a onClick={event => signOut(event, store)}>
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
                  className="responsive-img"
                  style={{ verticalAlign: "middle" }}
                />
              </Link>

              <ul id="nav-mobile" className="right">
                {renderAuth()}
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
        <MobileLinksComponent />
      </ul>
    </React.Fragment>
  );
}

export default HeaderComponent;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../Routes";
// import SignOutComponent from "./SignOutComponent";

// import NavlinksDesktop from "./others/navlinks/desktop";
// import NavlinksMobile from "./others/navlinks/mobile";

// import DropdownResources from "./others/dropdown/resources";
// import DropdownServices from "./others/dropdown/services";
// import DropdownProducts from "./others/dropdown/products";

// function HeaderComponent() {
// const store = React.useContext(Context);

//   React.useEffect(() => {
//     const sidenav_elems = document.querySelectorAll(".sidenav");
//     const sidenav_options = {};
//     M.Sidenav.init(sidenav_elems, sidenav_options);
//     const elems = document.querySelectorAll(".dropdown-trigger");
//     const options = {
//       constrainWidth: false,
//       coverTrigger: false,
//       hover: true,
//       closeOnClick: false
//     };
//     M.Dropdown.init(elems, options);
//   }, []);

// const renderAuth = () => {
//   if (store.state.user) {
//     return (
//       <React.Fragment>
//         <li>
//           <Link to="/products/cart" className="blue-text  text-darken-4">
//             <i className="material-icons">shopping_cart</i>
//             <span>({store.state.user.cart.length})</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/products/orders" className="blue-text  text-darken-4">
//             <i className="material-icons">local_shipping</i>
//             <span>({Object.keys(store.state.user.orders).length})</span>
//           </Link>
//         </li>
//         <li className="blue-text text-darken-4">
//           <SignOutComponent />
//         </li>
//       </React.Fragment>
//     );
//   }
//   return (
//     <React.Fragment>
//       <li id="signin material-icons">
//         <Link to="/signin" className="blue-text  text-darken-4">
//           <i className="material-icons">account_circle</i>
//         </Link>
//       </li>
//     </React.Fragment>
//   );
// };

//   return (
//     <React.Fragment>
//       <div className="navbar-fixed">
//         <nav className="white">
//           <div className="white">
//             <div className="container">
//               <Link to="/" data-target="slide-out" className="sidenav-trigger">
//                 <i className="material-icons blue-text text-darken-4 ajiozi-burger-nav show-on-large">
//                   menu
//                 </i>
//               </Link>

//               <Link to="/" id="menu">
// <img
//   src="/images/logos/main.png"
//   className="ajiozi-logo"
//   alt="logo"
// />
//               </Link>

//               <ul id="nav-mobile" className="right">
// {renderAuth()}
//               </ul>

//               <ul id="nav-mobile" className="right hide-on-med-and-down">
//                 <DropdownResources />
//                 <DropdownServices />
//                 <DropdownProducts />
//                 <NavlinksDesktop />
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>

//       <ul id="slide-out" className="sidenav">
//         <li>
//           <div className="user-view">
//             <div className="background">
//               <img src="/images/logos/main.png" />
//             </div>
//             <br />
//             <br />
//           </div>
//         </li>

//         <NavlinksMobile />
//         {/* {this.renderAuth()} */}
//       </ul>
//     </React.Fragment>
//   );

//   // signOutUser = async () => {
//   //   this.store.signOutUser();
//   // };
// }

// export default HeaderComponent;
