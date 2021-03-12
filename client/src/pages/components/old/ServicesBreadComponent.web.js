import React from "react";
import { Link } from "react-router-dom";

function ServicesBreadComponent(props) {
  return (
    <section className="app-my-2">
      <Link to="/">Home</Link> <i className="material-icons">chevron_right</i>{" "}
      <Link to="/services.html">Services</Link>
      <i className="material-icons">chevron_right</i> {props.data}
    </section>
  );
}

export default ServicesBreadComponent;
