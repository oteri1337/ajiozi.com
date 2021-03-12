import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

const LeadershipPage = () => {
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
      label: "Leadership"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="card-panel">
        <section className="center">
          <h2>Leadership</h2>
          <p className="container">
            Dedicated to the belief that creativity fuels innovation our
            leadership is driven by the simple philosophy of giving and
            empowering our workforce to change the world and improving the
            society for better socio-economical values
          </p>
          <br />
          <br />
          <div className="row">
            <div className="col l4 offset-l2">
              <div className="card medium">
                <div className="card-image">
                  <img
                    src="/images/team/ajiroghene-sunday.png"
                    alt="Ajiroghene Sunday"
                    id="ajiozi-profile-photo"
                  />
                </div>
                <div className="card-content">
                  <b>Ajiroghene Sunday</b>
                  <p>Founder</p>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className="col l4">
              <div className="card medium">
                <div className="card-image">
                  <img
                    src="/images/team/iteke-richard.png"
                    alt="Iteke Richard"
                    id="ajiozi-profile-photo"
                  />
                </div>
                <div className="card-content">
                  <b>Iteke Richard</b>
                  <p>Co Founder</p>
                  <span>Chief Operating Officer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col l4 offset-l2">
              <div className="card medium">
                <div className="card-image">
                  <img
                    src="/images/team/uwoajega-joseph.jpg"
                    alt="Uwoajega Joseph"
                    id="ajiozi-profile-photo"
                  />
                </div>
                <div className="card-content">
                  <b>Uwoajega Joseph</b>
                  <p>Executive Vice President</p>
                  <span>Chief Project Manager</span>
                </div>
              </div>
            </div>

            <div className="col l4">
              <div className="card medium">
                <div className="card-image">
                  <img
                    src="/images/team/oteri-avwunudiogba.jpg"
                    alt="Oteri Avwunudiogba"
                    id="ajiozi-profile-photo"
                  />
                </div>
                <div className="card-content">
                  <b>Oteri Avwunudiogba</b>
                  <p>Executive Vice President</p>
                  <span>Chief Cyber Manager</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ContainerComponent>
  );
};

export default LeadershipPage;
