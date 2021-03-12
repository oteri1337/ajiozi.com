import React from "react";
import { useRequest } from "../../Routes";
import UtilFormComponent from "../components/UtilFormComponent";

function UserResendTokenComponent(props) {
  const { state, onDone } = useRequest(
    "/api/users/auth/token/email/verify",
    "POST"
  );

  const initialState = {
    email: props.email
  };

  return (
    <UtilFormComponent
      initialState={initialState}
      onSubmit={onDone}
      text="Resend Link"
      fetching={state.fetching}
      errors={state.response.errors}
      message={state.response.message}
    />
  );
}

export default UserResendTokenComponent;
