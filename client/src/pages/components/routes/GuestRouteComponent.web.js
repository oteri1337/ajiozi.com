import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../../../Routes";

function GuestRoute(props) {
  const store = React.useContext(Context);

  if (store.state.user) {
    return <Redirect to="/products/list.html" />;
  }

  return <Route {...props} />;
}

export default GuestRoute;
