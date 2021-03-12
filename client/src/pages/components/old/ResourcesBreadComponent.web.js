import React from "react";
import { Link } from "react-router-dom";

function ResourcesBreadComponent(props) {
  return (
    <section className="app-my-2">
      <Link to="/">Home</Link> <i className="material-icons">chevron_right</i>{" "}
      <Link to="/resources.html">Resources</Link>
      <i className="material-icons">chevron_right</i> {props.data}
    </section>
  );
}

export default ResourcesBreadComponent;
