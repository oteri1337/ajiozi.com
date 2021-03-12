import React from "react";
import { Consumer } from "./context";

export default function AdminLoggedIn(WrappedComponent) {
  async function auth(props) {
    let isLoggedIn = await localStorage.getItem("admin_logged");

    if (isLoggedIn === null) {
      await localStorage.setItem("admin_logged", "false");
    }

    if (isLoggedIn === "false") {
      return props.history.push("/control/signin");
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
