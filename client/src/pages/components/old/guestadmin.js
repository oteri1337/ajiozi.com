import React from "react";
import { Redirect } from "react-router-dom";

function GuestAdmin(props) {
  let Component = props.component;
  let redirect = props.redirect || "/admin/home";

  if (!props.me) {
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

export default connect(mapState)(GuestAdmin);
