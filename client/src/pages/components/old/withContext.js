import React from "react";
import { Consumer } from "./context";

export default function withContext(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>
        {value => {
          return <WrappedComponent {...props} context={value} />;
        }}
      </Consumer>
    );
  };
}
