import React from "react";

function Errors(props) {
  if (props.data.length > 0) {
    let errors = props.data.map(error => (
      <React.Fragment key={error}>
        <span>{error}</span>
        <br />
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        <div className="red lighten-4 card-panel">{errors}</div>
        <br />
      </React.Fragment>
    );
  }

  return <React.Fragment />;
}

export default Errors;
