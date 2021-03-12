import React from "react";
import { Link } from "react-router-dom";
import { WOW } from "wowjs/dist/wow.min.js";
import ContainerComponent from "../components/tour/TourContainerComponent";
import SliderComponent from "../components/utilities/SliderComponent";
import Whoweare from "../components/tour/whoweare";

class Index extends React.Component {
  render = () => {
    return (
      <ContainerComponent padding={false}>
        <main>
          <SliderComponent />

          <section className="white card-panel">
            <div className="row">
              <div className="col l6 wow fadeInUp slow">
                <br />
                <br />
                <img
                  src="images/stock/stock-7.png"
                  style={{ maxWidth: "100%" }}
                />
              </div>

              <div className="col l6 wow fadeInUp slow">
                <h2>Expertise</h2>
                <p>
                  Ajiozi Limited specialises in home and Industrial Internet of
                  Things (IoTs). With the IoTs technology there is the reduction
                  of consumption of resources in industry, which in turn
                  improves efficiency, maintainability, reliability and
                  productivity.
                </p>
                <p>
                  We help industry achieve Asset Maintenance, Workforce
                  Management, Plant Organisation, Energy Savings and Logistic
                  optimisation.
                </p>
                <p>
                  To help industry meet and upgrade facility to IoT technology,
                  we have created and developed support for both hardware and
                  software to deliver the different demand in smart home,
                  intelligent security, smart energy, healthcare or building
                  management system.
                </p>
                <p>
                  Furthermore, Ajiozi creates and delivers integrated security
                  solutions to meet the varying needs of our customers. from
                  basic access control, right through to critical sites with
                  some of today's highest security requirements.
                </p>
                <p>
                  The inherent need to secure and automate processes around you
                  continually expand your horizon of responsibility. Thus,
                  Ajiozi believes that everything that can be automated will be
                  automated and everything that should be secured, would!
                </p>

                <div className="center">
                  <Link
                    to="/resources.html"
                    className="btn btn-large white blue-text flat"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="blue darken-4 card-panel white-text center">
            <div className="container">
              <h3>Services</h3>
              <br />
              <br />
              <div className="row">
                <div className="col l4 wow fadeInUp slow">
                  <i className="material-icons" style={{ fontSize: "10rem" }}>
                    adb
                  </i>
                  <br />
                  <h5>IoT Deployment</h5>
                  <p>
                    Our IoT Consultants help enterprises to deploy successful
                    internet of things solutions at their organization
                  </p>
                </div>
                <div className="col l4 wow fadeInUp slow" data-wow-delay="0.2s">
                  <i
                    className="material-icons text-darken-4"
                    style={{ fontSize: "10rem" }}
                  >
                    camera
                  </i>
                  <br />
                  <h5>CCTV Installation</h5>
                  <p>
                    CCTV has become invaluable for not only helping to detect
                    but also to deter different types of crime, and for
                    evaluating stored images as an investigative tool
                  </p>
                </div>
                <div className="col l4 wow fadeInUp slow" data-wow-delay="0.4s">
                  <i
                    className="material-icons text-darken-4"
                    style={{ fontSize: "10rem" }}
                  >
                    commute
                  </i>
                  <br />
                  <h5>Vehicle Tracking</h5>
                  <p>
                    We sell and install state of the art vehicle tracking system
                    that can help to track and recover stolen vehicles
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col l4 wow fadeInUp slow">
                  <i className="material-icons" style={{ fontSize: "10rem" }}>
                    dns
                  </i>
                  <br />
                  <h5>Cyber Security</h5>
                  <p>
                    We provide end-to-end advisory, protection and monitoring
                    services to secure your organization. We also advise on your
                    cybersecurity strategy to help you define your security
                    perimeter, objectives and procedures.
                  </p>
                </div>
                <div className="col l4 wow fadeInUp slow" data-wow-delay="0.2s">
                  <i className="material-icons" style={{ fontSize: "10rem" }}>
                    waves
                  </i>
                  <br />
                  <h5>Electric Fencing</h5>
                  <p>
                    An electric fence is a barrier that uses electric shocks to
                    deter humans and animals from crossing a boundary. They are
                    used to enhance the security in homes, organizations and so
                    on.
                  </p>
                </div>
                <div className="col l4 wow fadeInUp slow" data-wow-delay="0.4s">
                  <i className="material-icons" style={{ fontSize: "10rem" }}>
                    kitchen
                  </i>
                  <br />
                  <h5>Smart Door Access</h5>
                  <p>
                    Smart Door Solutions allow you to monitor and control your
                    door while you are at work or even on holidays from your
                    compatible smart phone
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col l4 wow fadeInUp slow">
                  <i className="material-icons" style={{ fontSize: "10rem" }}>
                    payment
                  </i>
                  <br />
                  <h5>General Contracting</h5>
                  <p>
                    A general contractor is responsible for providing all of the
                    material, labor, equipment and services necessary for the
                    construction of the project.
                  </p>
                </div>
                <div className="col l4 wow fadeInUp slow" data-wow-delay="0.2s">
                  <i className="material-icons" style={{ fontSize: "10rem" }}>
                    devices_other
                  </i>
                  <br />
                  <h5>Software Engineering</h5>
                  <p>
                    Our software engineering service spans the “Embedded
                    Software Spectrum” — from simple subsystems to stand-alone
                    devices, web, mobile apps and access solutions,
                    Internet-of-Things (IoT) systems, and security.
                  </p>
                </div>
                <div className="col l4 wow fadeInUp slow" data-wow-delay="0.4s">
                  <i className="material-icons" style={{ fontSize: "10rem" }}>
                    record_voice_over
                  </i>
                  <br />
                  <h5>Intercom System Installation</h5>
                  <p>
                    With an intercom system visitors can be identified, which
                    gives added security. An intercom system can improve
                    internal logistics.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/services.html"
              className="blue btn-large white-text wow fadeInLeft"
              data-wow-delay="0.6s"
            >
              View All Services
            </Link>
          </section>

          <Whoweare />

          <section className="white card-panel center">
            <h6>
              <b>OUR PARTNERS</b>
            </h6>
            <br />
            <br />
            <div className="row center">
              <div className="col l3 s12">
                <img
                  src="images/partners/smqt.png"
                  className="ajiozi-partners"
                />
              </div>
              <div className="col l3 s12">
                <img
                  src="images/partners/lenovo.png"
                  className="ajiozi-partners"
                />
              </div>
              <div className="col l3 s12">
                <img
                  src="images/partners/samsung.png"
                  className="ajiozi-partners"
                />
              </div>
              <div className="col l3 s12">
                <img
                  src="images/partners/hikvision.png"
                  className="ajiozi-partners"
                />
              </div>
            </div>
          </section>
        </main>
      </ContainerComponent>
    );
  };

  componentDidMount = () => {
    particlesJS(
      "particles-js",

      {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#b61924",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover"
        }
      }
    );

    new WOW({ mobile: false }).init();
  };
}

export default Index;
