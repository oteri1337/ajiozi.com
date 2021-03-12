import React from "react";
import { useRequest } from "../../../Routes";
import TourContainerComponent from "../../components/tour/TourContainerComponent";
import UtilFormComponent from "../../components/utilities/UtilFormComponent";

function ResetPasswordPage() {
  const { state, onDone } = useRequest(
    "/api/users/auth/token/password/update",
    "POST"
  );

  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Reset Password"
    }
  ];

  const formArray = [
    {
      id: "email",
      type: "email"
    }
  ];

  return (
    <TourContainerComponent bread={nav}>
      <div className="row">
        <div className="col s12 m12 l6 offset-l3">
          <div className="card-panel z-depth-2">
            <h1 className="h4">Reset Password</h1>
            <UtilFormComponent
              formArray={formArray}
              fetching={state.fetching}
              errors={state.response.errors}
              message={state.response.message}
              onSubmit={body => onDone(body)}
            />
          </div>
        </div>
      </div>
    </TourContainerComponent>
  );
}

export default ResetPasswordPage;
