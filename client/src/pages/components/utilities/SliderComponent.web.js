import React from "react";
import { Link } from "react-router-dom";
import Slide1 from "../../../assets/images/slides/Slide1.jpg";
import Slide2 from "../../../assets/images/slides/Slide2.jpg";
import Slide3 from "../../../assets/images/slides/Slide3.png";
import Slide4 from "../../../assets/images/slides/Slide4.jpg";

class SliderComponent extends React.Component {
  render = () => {
    return (
      <div className="slider white" id="top-slider">
        <ul className="slides app-primary-background">
          <li
            style={{ opacity: 1 }}
            className="active blue darken-4 ajiozi-circles white-text"
            id="particles-js"
          >
            <img src={Slide1} />
            <div className="caption">
              <center>
                <h2>
                  Ajiozi specializes in deployments of IoTs and Consultancy
                </h2>
              </center>
              <p className="slider-text white-text">
                Wireless intelligent automation control continues to evolve.
                This evolving technology has led the industry into the fourth
                industrial revolution known as Industry 4.0. We at Ajiozi
                leverage on this and we have developed solutions and still
                developing new ingenious solutions just for you. We design,
                implement and operate Internet of Things solutions fitting to
                customers’ current and future needs. We connect things,
                machines, people and places through a global IoT system with
                more than 400 mobile networks.
              </p>
              <center>
                <Link
                  to="/services/iot.html"
                  className="green btn btn-large ajiozi-particles-button"
                >
                  Learn More
                </Link>
              </center>
            </div>
          </li>
          <li
            style={{ opacity: 0 }}
            className="blue darken-4 ajiozi-circles white-text"
            id="particles-js-two"
          >
            <img src={Slide2} />
            <div className="caption">
              <center>
                <h2>
                  The easiest way to secure equipments, facilities and data
                </h2>
              </center>
              <p className="slider-text white-text">
                Ajiozi is a Technology based company that specialises in design
                and production of high level security systems and automated
                devices for residence, co-operate organisation, industries,
                public/private schools as well as government parastatals. Ajiozi
                mission is to create socio-economic relevance through tight
                security measure and improve on societal value via systematic
                and cognitive protection for lives and property.
              </p>
              <center>
                <Link
                  to="/services/manufacture.html"
                  className="green btn btn-large ajiozi-particles-button"
                >
                  Learn More
                </Link>
              </center>
            </div>
          </li>
          <li
            style={{ opacity: 0 }}
            className="blue darken-4 ajiozi-circles white-text"
            id="particles-js"
          >
            <img src={Slide3} />
            <div className="caption">
              <center>
                <h2>Ajiozi provides IoT based Fleet Tracking Systems</h2>
              </center>
              <p className="slider-text white-text">
                Fleets of trucks, cars, ships, trains, planes, etc. — are the
                lifeline of many businesses that need to ship products or
                provide transportation services. With Ajiozi IoT fleet tracking,
                these businesses can reduce costs by keeping fleets in the field
                longer with better fuel economy, better safety, visibility into
                maintenance issues, and overall improvements to operational
                efficiency.
              </p>
              <p className="slider-text white-text">
                Benefits of IoT-based fleet management include more data for
                better analytics, data driven decisions, driver coaching,
                real-time customer shipment updates, and lost or stolen vehicle
                tracking.
              </p>
              <center>
                <Link
                  to="/services.html"
                  className="green btn btn-large ajiozi-particles-button"
                >
                  Learn More
                </Link>
              </center>
            </div>
          </li>

          <li
            style={{ opacity: 0 }}
            className="blue darken-4 ajiozi-circles white-text"
            id="particles-js"
          >
            <img src={Slide4} />
            <div className="caption">
              <center>
                <h2>Ajiozi provides asset integrity management services</h2>
              </center>
              <p className="slider-text white-text">
                Optimizing productivity requires facilities and equipment to be
                maintained regularly. Our asset integrity management services
                maintain your assets to ensure productivity, reliability and
                safety. We leverage on tailored asset integrity management
                program to suit your needs, helping you reduce risks and meet
                all relevant regulations.
              </p>
              <p className="slider-text white-text hide-on-med-and-down">
                We are a world class inspection, testing, verification and
                certification company, with unique global reach, we can provide
                the experienced staff and resources needed to achieve your
                inspection, engineering, data management and safety goals,
                wherever your assets are based.
              </p>
              <center>
                <Link
                  to="/services.html"
                  className="green btn btn-large ajiozi-particles-button"
                >
                  Learn More
                </Link>
              </center>
            </div>
          </li>
        </ul>
        {/* <ul className="indicators">
          <li className="indicator-item active" />
          <li className="indicator-item" />
          <li className="indicator-item" />
        </ul> */}
      </div>
    );
  };

  componentDidMount = () => {
    let slider = document.querySelectorAll("#top-slider");
    M.Slider.init(slider, { height: 550 });
  };
}

export default SliderComponent;
