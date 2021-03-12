import React from "react";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function MessageComponent(props) {
  let errors = props.errors || [];
  let success = props.success || "";

  if (success.length) {
    return (
      // <ReactCSSTransitionGroup
      //   transitionName="fade"
      //   transitionAppear={true}
      //   transitionAppearTimeout={500}
      //   transitionEnterTimeout={500}
      //   transitionLeaveTimeout={500}
      // >
      <React.Fragment>
        <div
          className="green lighten-4 card-panel"
          style={{ overflowWrap: "break-word" }}
        >
          {success}
        </div>
        <br />
      </React.Fragment>
      // </ReactCSSTransitionGroup>
    );
  }

  if (!errors.length) {
    return <React.Fragment />;
  }

  errors = props.errors.map((error) => (
    <React.Fragment key={error}>
      <span>{error}</span>
      <br />
    </React.Fragment>
  ));
  return (
    // <ReactCSSTransitionGroup
    //   transitionName="fade"
    //   transitionAppear={true}
    //   transitionAppearTimeout={500}
    //   transitionEnterTimeout={500}
    //   transitionLeaveTimeout={500}
    // >
    <React.Fragment>
      <div className="red lighten-4 card-panel">{errors}</div>
      <br />
    </React.Fragment>
    // </ReactCSSTransitionGroup>
  );
}

export default MessageComponent;
