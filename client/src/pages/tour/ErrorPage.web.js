import React from "react";
import ContainerComponent from "../components/tour/TourContainerComponent";

const NotFound = () => {
  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "404 Error"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="card-panel">
        <h1>404 ERROR</h1>
        <p>The resource you requested was not found.</p>
      </div>
    </ContainerComponent>
  );
};

export default NotFound;
