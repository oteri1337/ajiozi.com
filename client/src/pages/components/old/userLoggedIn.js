import React from "react";
import { Consumer } from "./context";

export default function UserLoggedIn(WrappedComponent) {
  async function auth(props) {
    let isLoggedIn = await localStorage.getItem("user_logged");

    if (isLoggedIn === null) {
      await localStorage.setItem("user_logged", "false");
    }

    if (isLoggedIn === "false") {
      return props.history.push("/signin");
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
