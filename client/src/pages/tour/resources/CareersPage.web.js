import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

const CareersPage = () => {
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
      label: "Careers"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="card-panel">
        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 ajiozi-stock-7">
            <div className="ajiozi-image-text">
              <h4>
                CAREERS
                <br />
              </h4>
              <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                Your success maters to us
                <br />
                <br />
                We are innovative and creative using the world class standard to
                meet the need of our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 blue darken-4 white-text center">
            <div className="container">
              <br />
              <br />
              <h6>GIVING YOU THE NEEDED VALUES</h6>
              <p style={{ fontSize: "1.2rem", padding: "2rem" }}>
                The inherent need to secure and automate processes around you
                continually expand your horizon of responsibility. Thus, Ajiozi
                believes that everything that can be automated will be automated
                and everything that should be secured, would!
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 center">
            <div className="container">
              <br />
              <br />
              <h4 className="center">History</h4>
              <br />
              <p>
                It started with a question. Is there a better way to automate
                and secure facility, residence, public buildings and data?
                Passionate about such question, Ajiozi found the answers but
                didn’t stop there.
              </p>

              <p>
                What is the global potential for transforming data into
                intelligence? What is the socio-economic value that an
                innovative security solutions would bring to users and the
                environment? Who else might benefit from using our new
                technologies? These present a wide range of opportunities that
                we are exploring.
              </p>

              <p>
                Admittedly, organisations and residence face complex security
                challenges and business risk. Understanding these challenges and
                responding with innovative solutions to keep the people and
                business safe is one of our core values.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default CareersPage;
