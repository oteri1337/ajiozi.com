import React from "react";
import { Link } from "react-router-dom";
import ContainerComponent from "../components/tour/TourContainerComponent";

function ServicesPage() {
  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Services"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <section className="card-panel">
        <div className="row ajiozi-no-margin">
          <div className="col l6 s12 ajiozi-stock-iot">
            <div className="ajiozi-image-text">
              <Link to="/services/iot.html" className="white-text">
                Deployments of IoTs and Consultancy
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>
          <div className="col l6 s12 ajiozi-stock-cctv">
            <div className="ajiozi-image-text">
              <Link to="/services/cctv.html" className="white-text">
                CCTV Installation, Electric Fence & Intercom
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row ajiozi-no-margin">
          <div className="col l6 s12 ajiozi-stock-system">
            <div className="ajiozi-image-text">
              <Link to="/services/manufacture.html" className="white-text">
                Manufacture of Security Systems
                <br />
                <i className="material-icons ajiozi-arrow">chevron_right</i>
              </Link>
            </div>
          </div>

          <div className="col l6 s12 ajiozi-stock-cyber">
            <div className="ajiozi-image-text">
              <Link to="/services/software.html" className="white-text">
                Cyber Security & Software Engineering
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

export default ServicesPage;
