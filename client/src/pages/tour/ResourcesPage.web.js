import React from "react";
import { Link } from "react-router-dom";
import ContainerComponent from "../components/tour/TourContainerComponent";

function Resources() {
  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Resources"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <section className="card-panel">
        <div className="row ajiozi-no-margin">
          <div className="col l9 s12 ajiozi-stock-2">
            <div className="ajiozi-image-text">
              <Link to="/resources/company.html" className="white-text">
                Company
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>
          <div className="col l3 s12 ajiozi-stock-3">
            <div className="ajiozi-image-text">
              <Link to="/resources/leadership.html" className="white-text">
                Leadership
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row ajiozi-no-margin">
          <div className="col l4 s12 ajiozi-stock-6">
            <div className="ajiozi-image-text">
              <Link to="/resources/values.html" className="white-text">
                Values
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>

          <div className="col l8 s12 ajiozi-stock-5">
            <div className="ajiozi-image-text">
              <Link to="/resources/mission.html" className="white-text">
                Vision & Mission
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row ajiozi-no-margin">
          <div className="col l12 s12 ajiozi-stock-7">
            <div className="ajiozi-image-text">
              <Link to="/resources/careers.html" className="white-text">
                Careers
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ContainerComponent>
  );
}

export default Resources;
