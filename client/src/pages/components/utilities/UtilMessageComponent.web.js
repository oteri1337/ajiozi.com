import React from "react";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function MessageComponent(props) {
  let errors = props.errors || [];
  let message = props.message || "";

  if (message.length) {
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
          className="green lighten-4 card-panel black-text app-my-1"
          style={{ overflowWrap: "break-word" }}
        >
          {message}
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
      <div className="red black-text lighten-4 card-panel app-my-1">
        {errors}
      </div>
      <br />
    </React.Fragment>
    // </ReactCSSTransitionGroup>
  );
}

export default MessageComponent;
