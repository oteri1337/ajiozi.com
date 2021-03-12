import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../Routes";

function UtilRouteAdminVerification(props) {
  const store = React.useContext(Context);

  if (store.state.admin === false) {
    return <Redirect to="/control/signin" />;
  }

  return <Route {...props} />;
}

export default UtilRouteAdminVerification;
