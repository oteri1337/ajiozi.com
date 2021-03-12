import React from "react";
import { Link } from "react-router-dom";

class Whoweare extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <div className="white card-panel center-align">
          <div className="container">
            <h4 className="darken-3 wow fadeIn" data-wow-delay="0.1s">
              <center>Why choose us?</center>
            </h4>
            <br />
            <div className="row">
              <div className="col l4 m4 s12">
                <div
                  className="card large card-panel hoverable wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  <div className="card-image">
                    <img
                      src="images/svgs/icon-global.svg"
                      alt="trust"
                      className="responsive_img"
                    />
                  </div>

                  <div className="card-content">
                    <h5 className="blue-text text-darken-3">
                      Global expertise
                    </h5>
                    <p>
                      We partner with the world's top tech firms to provide the
                      most sophisticated security systems for our clients.
                    </p>
                  </div>
                </div>
                <br />
              </div>

              <div className="col l4 m4 s12">
                <div
                  className="card large card-panel hoverable wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <div className="card-image">
                    <img
                      src="images/svgs/icon-trusted.svg"
                      alt="trust"
                      className="responsive_img"
                    />
                  </div>

                  <div className="card-content">
                    <h5 className="blue-text text-darken-3">
                      Ajiozi is trusted
                    </h5>
                    <p>
                      We gain the trust of our clients by meeting up with agreed
                      delivery and installation deadlines.
                    </p>
                  </div>
                </div>
                <br />
              </div>

              <div className="col l4 m4 s12">
                <div
                  className="card large card-panel hoverable wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <div className="card-image">
                    <img
                      src="images/svgs/icon-secure.png"
                      alt="trust"
                      className="responsive_img"
                      width="100%"
                    />
                  </div>

                  <div className="card-content">
                    <h5 className="blue-text text-darken-3">
                      Ajiozi is Reliable
                    </h5>
                    <p>
                      We've built some of the world's most sophisticated
                      security systems that have never been compromised.
                    </p>
                  </div>
                </div>
                <br />
              </div>
            </div>

            <Link
              to="/contact.html"
              className="blue btn-large white-text wow fadeInRight"
              data-wow-delay="0.1s"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default Whoweare;
