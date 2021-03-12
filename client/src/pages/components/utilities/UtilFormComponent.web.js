import React from "react";
import { Link } from "react-router-dom";
import UtilSubmitComponent from "./UtilSubmitComponent";
import UtilMessageComponent from "./UtilMessageComponent";

function UtilFormComponent(props) {
  const [state, setState] = React.useState({});
  const initialState = props.initialState || {};
  const onChangeHook = props.onChangeHook || function() {};
  const onChangeHookSetState = props.onChangeHookSetState || function() {};

  React.useEffect(() => {
    setState({ ...state, ...initialState });
  }, []);

  React.useLayoutEffect(() => {
    var selects = document.querySelectorAll("select");
    M.FormSelect.init(selects, {});
  }, []);

  React.useEffect(() => {
    M.updateTextFields();
  });

  const onChange = event => {
    const newState = { ...state, [event.target.id]: event.target.value };
    setState(newState);
    onChangeHook(onChangeHookSetState, newState);
  };

  const createForm = formObject => {
    // check box
    if (formObject.type === "checkbox") {
      return (
        <p key={formObject.label}>
          <label>
            <input id={formObject.id} type="checkbox" required />
            <span>
              {formObject.label}
              <Link to={formObject.link.link}>{formObject.link.title}</Link>
            </span>
          </label>
        </p>
      );
    }

    // textarea
    if (formObject.type === "textarea") {
      return (
        <div className="input-field" key={formObject.id}>
          <textarea
            id={formObject.id}
            className="materialize-textarea"
            value={state[formObject.id] || ""}
            onChange={onChange}
          />
          <label htmlFor={formObject.id}>{formObject.id}</label>
        </div>
      );
    }

    // file
    if (formObject.type === "file") {
      return (
        <div className="file-field input-field" key={formObject.id}>
          <div className="white btn green-text">
            <span>Select {formObject.id}</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      );
    }

    // select
    if (formObject.type === "select") {
      const options = formObject.options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      });

      return (
        <div className="input-field app-my-1" key={formObject.id}>
          <select id={formObject.id} onChange={onChange}>
            {options}
          </select>
          <label>{formObject.label || formObject.id.replace(/_/g, " ")}</label>
        </div>
      );
    }

    // number
    if (formObject.type === "number") {
      return (
        <div className="input-field" key={formObject.id}>
          <input
            type={"number"}
            max={formObject.max || ""}
            step="any"
            id={formObject.id}
            className="validate"
            value={state[formObject.id] || ""}
            onChange={onChange}
            required
          />
          <label className="active">
            {formObject.label || formObject.id.replace(/_/g, " ")}
          </label>
        </div>
      );
    }

    // text or password -- not required
    if (formObject.type === "password") {
      return (
        <div className="input-field" key={formObject.id}>
          <input
            type={formObject.type || "text"}
            id={formObject.id}
            className="validate"
            value={state[formObject.id] || ""}
            onChange={onChange}
            autoComplete={"new-password"}
            required
          />
          <label className="active">
            {formObject.label || formObject.id.replace(/_/g, " ")}
          </label>
        </div>
      );
    }

    // text or password -- not required
    if (formObject.required === false) {
      return (
        <div className="input-field" key={formObject.id}>
          <input
            type={formObject.type || "text"}
            id={formObject.id}
            className="validate"
            value={state[formObject.id] || ""}
            onChange={onChange}
          />
          <label className="active">
            {formObject.label || formObject.id.replace(/_/g, " ")}
          </label>
        </div>
      );
    }

    // text or password -- required
    return (
      <div className="input-field" key={formObject.id}>
        <input
          type={formObject.type || "text"}
          id={formObject.id}
          className={formObject.className || "validate"}
          value={state[formObject.id] || ""}
          onChange={onChange}
          required
        />
        <label className="active">
          {formObject.label || formObject.id.replace(/_/g, " ")}
        </label>
      </div>
    );
  };

  const renderSubmit = () => {
    if (!hideSubmitButton) {
      return (
        <React.Fragment>
          <UtilSubmitComponent
            text={props.text || "Submit"}
            fetching={props.fetching || false}
            className={props.className}
          />
          <br />
          <br />
        </React.Fragment>
      );
    }
  };

  const formArray = props.formArray || [];
  const elements = formArray.map(createForm);
  const onSubmit = event => {
    event.preventDefault();
    props.onSubmit(state);
  };

  const hideSubmitButton = props.hideSubmitButton || false;

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {elements}
      {renderSubmit()}

      <UtilMessageComponent
        errors={props.errors || []}
        message={props.message || ""}
      />
    </form>
  );
}

export default UtilFormComponent;
