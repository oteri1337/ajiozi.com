import React from "react";
import { Context } from "../../../Routes";
import ContainerComponent from "../../components/tour/TourContainerVerificationComponent";
import UserResendTokenComponent from "../../components/utilities/UserResendTokenComponent.web";

function VerifyEmailPage(props) {
  const store = React.useContext(Context);

  // Route Guard
  React.useEffect(() => {
    if (store.state.user.email_verified == 1) {
      props.history.push("/products.html");
    }
  });

  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Sign Up"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="row app-py-0 ">
        <div className="col s12 m12 l8 offset-l2 ">
          <div className="card-panel">
            <h1 className="h4">Sign Up</h1>

            <ul className="stepper linear ">
              <li className="step">
                <div className="step-title">Account Information</div>
              </li>

              <li className="step active">
                <div className="step-title">Email Verification</div>
                <div className="step-content">
                  <p>{store.state.user.email}</p>
                  <p>
                    Please check your email address for your verification link
                  </p>
                  <UserResendTokenComponent email={store.state.user.email} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}

export default VerifyEmailPage;
