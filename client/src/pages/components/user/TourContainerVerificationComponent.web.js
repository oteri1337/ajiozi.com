import React from "react";
import HeaderComponent from "./TourHeaderVerificationComponent.web";
import FooterComponent from "./FooterComponent";
import UtilBreadComponent from "./UtilBreadComponent";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function ContainerComponent(props) {
  React.useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const getClassName = () => {
    if (props.bread) {
      return "container app-my-1";
    }

    return "";
  };

  return (
    <React.Fragment>
      <HeaderComponent />
      <main className={getClassName()}>
        {props.bread ? (
          <UtilBreadComponent data={props.bread} />
        ) : (
          <React.Fragment />
        )}
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          {props.children}
        </ReactCSSTransitionGroup>
      </main>
      <FooterComponent />
    </React.Fragment>
  );
}

export default ContainerComponent;
