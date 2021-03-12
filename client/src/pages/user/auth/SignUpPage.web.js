import React from "react";
import { useStoreRequest } from "../../../Routes";
import ContainerComponent from "../../components/tour/TourContainerComponent";
import UtilFormComponent from "../../components/utilities/UtilFormComponent";

function SignupPage() {
  const { state, onDone } = useStoreRequest(
    "/api/users",
    "POST",
    "UPDATE_USER"
  );

  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Sign Up"
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
    },
    {
      id: "confirm_password",
      type: "password"
    },
    {
      id: "phone_number"
    },
    {
      id: "first_name"
    },
    {
      id: "last_name"
    },
    {
      id: "other_name",
      required: false
    },
    {
      id: "gender",
      type: "select",
      options: [
        {
          value: "Male",
          label: "Male"
        },
        {
          value: "Female",
          label: "Female"
        },
        {
          value: "Other",
          label: "Other"
        }
      ]
    },

    {
      id: "dob",
      label: "Date of Birth",
      type: "date",
      className: "datepicker"
    },
    {
      label: "adress line 1",
      id: "address"
    },
    {
      label: "city/town",
      id: "city"
    },
    {
      label: "state/province",
      id: "state"
    },
    {
      label: "zip/post code",
      id: "post_code"
    },
    {
      type: "select",
      options: [
        {
          value: "Nigeria",
          label: "Nigeria"
        },
        {
          value: "Africa",
          label: "Africa"
        },
        {
          value: "Asia",
          label: "Asia"
        },
        {
          value: "Australia",
          label: "Australia"
        },
        {
          value: "Europe",
          label: "Europe"
        },
        {
          value: "North America",
          label: "North America"
        },
        {
          value: "South America",
          label: "South America"
        },
        {
          value: "Oceania",
          label: "Oceania"
        },
        {
          value: "Not Listed",
          label: "Not Listed"
        }
      ],
      label: "country/region",
      id: "country"
    },
    {
      type: "checkbox",
      label: "I agree that I am above 18 years old, and to all ",
      link: {
        title: "terms of service",
        link: "/terms"
      }
    }
  ];

  const initialState = {
    country: "United States"
  };

  return (
    <ContainerComponent bread={nav}>
      <div className="row">
        <div className="col s12 m12 l8 offset-l2 ">
          <div className="card-panel">
            <h1 className="h4">Sign Up</h1>

            <ul className="stepper linear ">
              <li className="step active">
                <div className="step-title">Account Information</div>
                <div className="step-content">
                  <UtilFormComponent
                    formArray={formArray}
                    initialState={initialState}
                    text="Proceed"
                    fetching={state.fetching}
                    errors={state.response.errors}
                    onSubmit={body => onDone(body)}
                  />
                </div>
              </li>

              <li className="step">
                <div className="step-title">Email Verification</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}

export default SignupPage;
