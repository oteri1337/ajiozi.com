import React from "react";
import { Consumer } from "./context";

export default function UserLoggedOut(WrappedComponent) {
  async function auth(props) {
    let isLoggedIn = await localStorage.getItem("user_logged");

    if (isLoggedIn === "true") {
      return props.history.push("/");
    }

    if (isLoggedIn === null) {
      await localStorage.setItem("user_logged", "false");
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
