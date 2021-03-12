import React from "react";
import Textarea from "./textarea";

const Input = function(props) {
  if (props.type === "textarea") {
    return <Textarea {...props} />;
  }

  return (
    <React.Fragment>
      <div className="input-field">
        <label>{props.name}</label>
        <input
          type="text"
          className="form-control"
          required={props.required || false}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      <br />
    </React.Fragment>
  );
};

export default Input;
