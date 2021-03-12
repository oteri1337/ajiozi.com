import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { Context } from "../../Router";

function UserGuestComponent(props) {
  // const store = React.useContext();

  // console.log(store);

  // let Component = props.component;
  // let redirect = props.redirect || "/user/home";

  // if (!props.me) {
  //   return <Component {...props} />;
  // } else {
  //   return <Redirect to={redirect} />;
  // }

  return <Route {...props} />;
}

export default UserGuestComponent;
