import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../Routes";

function UtilRouteVerification(props) {
  const store = React.useContext(Context);

  if (store.state.user === false) {
    return <Redirect to="/signin" />;
  }

  return <Route {...props} />;
}

export default UtilRouteVerification;
