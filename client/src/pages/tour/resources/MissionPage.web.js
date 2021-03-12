import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

const MissionPage = () => {
  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Resources",
      link: "/resources.html"
    },
    {
      label: "Vision and Mission"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="card-panel">
        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 ajiozi-stock-4">
            <div className="ajiozi-image-text">
              <h4>
                OUR VISION
                <br />
              </h4>
              <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                To Secure and Automate Everything that should be.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 ajiozi-stock-5 center">
            <div className="ajiozi-image-text">
              <div className="container">
                <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                  We envision a society whose social value is maintained through
                  sophisticated control and secured processes. Where everyone
                  can make better decision in trusted data.
                </p>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 ajiozi-stock-9 center">
            <div className="ajiozi-image-text">
              <div className="container">
                <h4>
                  OUR MISSION
                  <br />
                </h4>
                <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                  To create an environment that is technologically based with
                  the most trusted information.
                </p>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default MissionPage;
