import React from "react";
import { Context } from "../../Routes";

function SignOutComponent(props) {
  const store = React.useContext(Context);

  const onClick = () => {
    store.callReducer({ type: "UPDATE_USER", data: false });
    location = "/signin";
  };

  return (
    <React.Fragment>
      <i onClick={onClick} className="material-icons">
        power_settings_new
      </i>
    </React.Fragment>
  );
}

export default SignOutComponent;
