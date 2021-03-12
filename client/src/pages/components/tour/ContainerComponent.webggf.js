import React from "react";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function ContainerComponent(props) {
  React.useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      {/* <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      > */}
      <main className={props.className}>{props.children}</main>
      {/* <button onClick={() => window.scrollBy(0, screenY - pageYOffset)}>
          up
        </button> */}
      {/* </ReactCSSTransitionGroup> */}
      <FooterComponent {...props} />
    </React.Fragment>
  );
}

export default ContainerComponent;
