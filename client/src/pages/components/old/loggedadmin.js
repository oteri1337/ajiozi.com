import React from "react";
import { Redirect } from "react-router-dom";

function LoggedAdmin(props) {
  let Component = props.component;
  let redirect = props.redirect || "/admin/signin";

  if (props.me) {
    if (!props.me.email_verified) {
      return <Redirect to="/admin/email/verify" />;
    }

    return <Component {...props} />;
  } else {
    return <Redirect to={redirect} />;
  }
}

const mapState = function(state) {
  return {
    me: state.admins.me
  };
};

export default connect(mapState)(LoggedAdmin);
