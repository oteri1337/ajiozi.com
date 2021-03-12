import React from "react";
import { useStoreRequest } from "../../../Routes";
import UtilFormComponent from "./UtilFormComponent";

const UtilSearchComponent = props => {
  const { state, onDone } = useStoreRequest(
    props.endpoint,
    `POST`,
    props.dispatch
  );

  const formArray = [
    {
      id: "search"
    }
  ];

  return (
    <div className="container">
      <UtilFormComponent
        formArray={formArray}
        hideSubmitButton={true}
        onSubmit={onDone}
        fetching={state.fetching}
        errors={state.response.errors}
        message={state.response.message}
      />
    </div>
  );
};

export default UtilSearchComponent;
