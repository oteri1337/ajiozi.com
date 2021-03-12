import React from "react";
import { Redirect } from "react-router-dom";

function LoggedRoute(props) {
  let Component = props.component;
  let redirect = props.redirect || "/user/signin";

  if (props.me) {
    if (!props.me.email_verified) {
      return <Redirect to="/user/email/verify" />;
    }

    return <Component {...props} />;
  } else {
    return <Redirect to={redirect} />;
  }
}

const mapState = function(state) {
  return {
    me: state.users.me
  };
};

export default LoggedRoute;
