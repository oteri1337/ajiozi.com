import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

const ValuesPage = () => {
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
      label: "Values"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="card-panel">
        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 ajiozi-stock-10 center">
            <div className="ajiozi-image-text">
              <h4>
                OUR VALUES
                <br />
              </h4>
              <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                Our Values Shape Our Culture.
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
          <div className="col l12 s12 blue darken-4 white-text center">
            <div className="container">
              <br />
              <br />
              <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                Everything we offer is a world class standard which set the pace
                at Ajiozi. From the services and products we offer, our core
                values fosters our customers, and partners about the kind of
                relationship they can expect when they work with us.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 ajiozi-stock-11 center">
            <div className="ajiozi-image-text">
              <h4>
                ANALYTICAL
                <br />
              </h4>
              <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                We are relentless problem-solvers, unafraid to challenge
                assumptions by being creative and forward-thinking Is the Leader
                of Security and Automation Solutions in Africa.
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
          <div className="col l12 s12 ajiozi-stock-12 center">
            <div className="ajiozi-image-text">
              <h4>
                PASSION
                <br />
              </h4>
              <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                We are relentless problem-solvers, unafraid to challenge
                assumptions by being creative and forward-thinking Is the Leader
                of Security and Automation Solutions in Africa.
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
      </div>
    </ContainerComponent>
  );
};

export default ValuesPage;
