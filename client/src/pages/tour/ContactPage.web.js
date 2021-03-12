import React from "react";
import { useRequest } from "../../Routes";
import ContainerComponent from "../components/tour/TourContainerComponent";
import UtilFormComponent from "../components/utilities/UtilFormComponent";

function ContactPage() {
  const { state, onDone } = useRequest("/api/cms/contact", "POST");

  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Contact Us"
    }
  ];

  const formArray = [
    {
      id: "name",
      type: "text"
    },
    {
      id: "email",
      type: "email"
    },
    {
      id: "subject",
      type: "text"
    },
    {
      id: "body",
      type: "textarea"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="row">
        <div className="col s12 m12 l6 offset-l3">
          <div className="card-panel z-depth-2">
            <h4>Let's talk</h4>
            <br /> <br />
            <i className="material-icons ajiozi-social">phone</i>
            <span className="ajiozi-social-text">+234 808 051 2977</span>
            <br />
            <br />
            <i className="material-icons ajiozi-social">mail</i>
            <span className="ajiozi-social-text">ajiozi@ajiozi.com</span>
            <br />
            <br />
            <br />
            <UtilFormComponent
              formArray={formArray}
              onSubmit={onDone}
              fetching={state.fetching}
              errors={state.response.errors}
              message={state.response.message}
            />
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}

export default ContactPage;
