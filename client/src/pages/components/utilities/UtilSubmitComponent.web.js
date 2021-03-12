import React from "react";

function SubmitComponent(props) {
  let onClick = props.onClick || function() {};

  if (props.fetching) {
    return (
      <React.Fragment>
        <br />
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <br />
      <button
        type="submit"
        className={props.className || "btn"}
        onClick={onClick}
      >
        {props.text || "Submit"}
      </button>
    </React.Fragment>
  );
}

export default SubmitComponent;
