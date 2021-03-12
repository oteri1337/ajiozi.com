import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../Routes";

function UtilRouteAdmin(props) {
  const store = React.useContext(Context);

  if (store.state.admin === false) {
    return <Redirect to="/control/signin" />;
  }

  if (store.state.admin.email_verified == 0) {
    return <Redirect to="/control/verify/email" />;
  }

  return <Route {...props} />;
}

export default UtilRouteAdmin;
