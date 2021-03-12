import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../../Routes";

function UserRouteComponent(props) {
  const store = React.useContext(Context);
  const user = store.state.user;

  if (user === false) {
    return <Redirect to="/signin" />;
  }

  if (user.email_verified == 0 || user.email_verified === undefined) {
    return <Redirect to="/user/auth/email_verification.html" />;
  }

  return <Route {...props} />;
}

export default UserRouteComponent;
