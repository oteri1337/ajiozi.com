import React from "react";

const Textarea = function (props) {
    return (
        <React.Fragment>
        <label>{props.name}</label>
        <textarea
          type="text"
          className="form-control"
          required={props.required || false}
          
          id={props.id}
          value={props.value}
          placeholder={props.name}
          onChange={props.onChange}

        />
        <br />
        </React.Fragment>
    );
}

export default Textarea;