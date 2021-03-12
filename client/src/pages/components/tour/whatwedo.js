import React from "react";
import { Link } from "react-router-dom";

class Whatwedo extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <div className="card-panel blue darken-2">
          <div className="container">
            <center>
              <h4 className="white-text">Services</h4>
              <br />
              <div className="row">
                <div className="col l4 m4 s12">
                  <div
                    className="card-panel hoverable wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img
                      src="/app/images/illustrations/icon-server.png"
                      alt="trust"
                      className="responsive_img"
                      width="100%"
                    />

                    <h5 className="blue-text text-darken-3">Cyber Security</h5>
                    <p>
                      {" "}
                      short write up short write up short write up short write
                      up short write up short write up short write up short
                      write up short write up short write up short write up
                      short write up short write up
                    </p>
                  </div>
                </div>

                <div className="col l4 m4 s12">
                  <div
                    className="card-panel hoverable wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img
                      src="/app/images/illustrations/icon-cctv.jpeg"
                      alt="trust"
                      className="responsive_img"
                      width="100%"
                    />
                    <h5 className="blue-text text-darken-3">
                      CCTV Installation
                    </h5>
                    <p>
                      {" "}
                      short write up short write up short write up short write
                      up short write up short write up short write up short
                      write up short write up short write up short write up
                      short write up short write up
                    </p>
                  </div>
                </div>

                <div className="col l4 m4 s12">
                  <div
                    className="card-panel hoverable wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <img
                      src="/app/images/illustrations/icon-person.png"
                      alt="trust"
                      className="responsive_img"
                      width="100%"
                    />
                    <h5 className="blue-text text-darken-3">
                      Personal Security
                    </h5>
                    <p>
                      {" "}
                      short write up short write up short write up short write
                      up short write up short write up short write up short
                      write up short write up short write up short write up
                      short write up short write up
                    </p>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <Link
                to="/services"
                className="blue btn-large white-text wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                View All Services
              </Link>
            </center>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default Whatwedo;
