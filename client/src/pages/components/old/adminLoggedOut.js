import React from "react";
import { Consumer } from "./context";

export default function AdminLoggedOut(WrappedComponent) {
  async function auth(props) {
    let isLoggedIn = await localStorage.getItem("admin_logged");

    if (isLoggedIn === "true") {
      return props.history.push("/control");
    }

    if (isLoggedIn === null) {
      await localStorage.setItem("admin_logged", "false");
    }
  }

  return function(props) {
    auth(props);
    return (
      <Consumer>
        {value => {
          return <WrappedComponent {...props} context={value} />;
        }}
      </Consumer>
    );
  };
}
