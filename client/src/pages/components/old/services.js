import React from "react";
import { Link } from "react-router-dom";

function DropdownServices() {
  return (
    <React.Fragment>
      <ul id="services" className="dropdown-content">
        <li>
          <Link to="/services/iot" className="blue-text">
            Depolyments of IoTs Technology & Consultancy
          </Link>
        </li>
        <li>
          <Link to="/services/manufacture" className="blue-text">
            Manufacture of Security Systems
          </Link>
        </li>
        <li>
          <Link to="/services/cctv" className="blue-text">
            Supplies of IP/Analog Cameras and Biometric Systems
          </Link>
        </li>
        <li>
          <Link to="/services/cctv" className="blue-text">
            CCTV Installation, Electric Fence, Intercom & Maintenance
          </Link>
        </li>
        <li>
          <Link to="/services" className="blue-text">
            Smart Door Access/RFID & Car Tracking
          </Link>
        </li>
        <li>
          <Link to="/services" className="blue-text">
            Control and Instrumentation System/Calibration
          </Link>
        </li>
        <li>
          <Link to="/services/software" className="blue-text">
            Software Engineering
          </Link>
        </li>
        <li>
          <Link to="/services" className="blue-text">
            General Contracting / Engineering Works
          </Link>
        </li>
        <li>
          <Link to="/services/sotware" className="blue-text">
            Cyber Security & Penetration Testing
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default DropdownServices;
