import React from "react";
import { Link } from "react-router-dom";
import { useStoreRequest } from "../../../Routes";
import ContainerComponent from "../../components/tour/TourContainerComponent";
import UtilFormComponent from "../../components/utilities/UtilFormComponent";

function SigninPage() {
  const { state, onDone } = useStoreRequest(
    "/api/users/auth/signin",
    "POST",
    "UPDATE_USER"
  );

  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Sign In"
    }
  ];

  const formArray = [
    {
      id: "email",
      type: "email"
    },
    {
      id: "password",
      type: "password"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="row app-py-0 ">
        <div className="col s12 m12 l6 offset-l3">
          <div className="card-panel">
            <h1 className="h4">Sign In</h1>
            <center>
              <UtilFormComponent
                formArray={formArray}
                text="Sign In"
                onSubmit={onDone}
                fetching={state.fetching}
                errors={state.response.errors}
              />
              <Link
                to="/user/auth/password_reset.html"
                className="white btn-flat"
              >
                Reset Password
              </Link>
              <br />
              <br />
              <br />
              Dont have an account?{" "}
              <Link to="/user/auth/signup.html">Sign Up</Link>
            </center>
          </div>

          {/* </form> */}
        </div>
      </div>
    </ContainerComponent>
  );
}

export default SigninPage;
