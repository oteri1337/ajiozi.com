import React from "react";
import ContainerComponent from "../../components/tour/TourContainerComponent";

function CctvPage() {
  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Services",
      link: "/services.html"
    },
    {
      label: "CCTV Installation, Electric Fence & Intercom"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <section className="card-panel ajiozi-padding-ten" id="cctv">
        <div className="container">
          <div className="row">
            <div className="col l3">
              <i className="material-icons" style={{ fontSize: "9rem" }}>
                camera
              </i>
            </div>
            <div className="col l3">
              <i className="material-icons" style={{ fontSize: "9rem" }}>
                waves
              </i>
            </div>
            <div className="col l3">
              <i className="material-icons" style={{ fontSize: "9rem" }}>
                record_voice_over
              </i>
            </div>
          </div>
          <br />
          <h4>CCTV Installation, Electric Fence & Intercom</h4>
          <p>
            We care about your protection. Ajiozi provides protection to life
            and property electronically through smart connected devices one of
            which includes the installation of CCTV to its clients through the
            entire country and Africa at large. We have a great wealth of
            knowledge and experience in the security field. The product we
            supply have industrial standard and reputations, viz. Sony, Lenovo,
            Samsung, SMQT Vivotek to mention a few.
          </p>
          <h5>Perimeter security</h5>
          <p>
            Ajiozi offers a range of advanced perimeter security
            solutions founded on two core principles: deterrence and detection.
          </p>
          <p>
            Configured and controlled using Gallagher Command Centre, our
            effective and reliable solutions can be managed and monitored across
            multiple sites from one central location.
          </p>
          <p>
            Our cost-effective monitored pulse fence system consists of a grid
            of energized, high tensile wires that can be constructed inside a
            new or existing perimeter fence. The monitored wires detect
            unauthorized entry or exit into defined areas and trigger instant
            alerts.
          </p>
          <h5>Powerful deterrence</h5>
          <p>
            Attempts to breach the perimeter are deterred by an energized pulse
            sent around the perimeter fence line. Monitored pulse fencing meets
            stringent safety criteria, while delivering a short but safe shock,
            making it almost impossible to climb the fence.
          </p>
          <p>
            Zoned fences allow voltage levels to be adjusted to meet varying
            needs: high for maximum deterrent and low for periods of low risk.
          </p>
          <h5>Detect and respond</h5>
          <p>
            A networked perimeter solution incorporates sensors that
            continuously measure and report on wire tension and monitor fence
            structure vibration or movement. Sensors can be used with or without
            an energized pulse to detect intrusion without the intruder being
            aware.
          </p>
          <p>
            The system intelligently differentiates between serious breaches and
            disturbances by wildlife, birds or harsh weather conditions. False
            alarms are prevented, and intruders are unable to use the cover of
            adverse weather to breach the fence undetected.
          </p>
          <p>
            When a fence sensor is triggered an alarm will activate for that
            zone, allowing guards to immediately focus their attention where
            it’s most needed.
          </p>
          <p>
            Full integration with imaging systems provides a visual and audible
            record of events that can be viewed as a live stream or relied upon
            as evidence if required.
          </p>
          <h5>Perimeter security products</h5>
          <ul>
            <li>
              Fence controllers - perimeter energizer and attack detection
              products
            </li>
            <li>Fence hardware - specialized perimeter fence hardware</li>
            <li>
              Fence Integrity Monitor - consistent monitoring of your fence
              circuit
            </li>
            <li>Perimeter sensors- enhanced perimeter awareness technology</li>
            <li>
              Security Integrations - integrations for extended business
              functionality
            </li>
          </ul>
          <h5>International safety standards</h5>
          <p>
            Ajiozi and her partner perimeter products are designed to comply
            with international safety and electromagnetic compatibility
            standards. These standards set out the safety requirements for the
            design, installation, and operation of pulse fencing and associated
            equipment.
          </p>
          <p>
            Every energizer product developed has been tested in New Zealand
            laboratories accredited by IANZ (International Accreditation New
            Zealand), and Ajiozi partner-Gallagher is dedicated to reviewing
            changing standards and ensuring products are compliant with all
            legal specifications.
          </p>
          <p>
            As recognized industry experts in energized fencing technology,
            Ajiozi partner - Gallagher is an invited member of the Global
            Standards Committee which develops and updates energized fencing
            safety standards.
          </p>
        </div>
      </section>
    </ContainerComponent>
  );
}

export default CctvPage;
