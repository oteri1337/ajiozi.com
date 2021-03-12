import React from "react";
import { Link } from "react-router-dom";

function UtilBreadComponent(props) {
  const data = props.data || [];

  const links = data.map(item => {
    if (item.link) {
      return (
        <span key={item.label}>
          <Link to={item.link}>{item.label}</Link>
          <i className="material-icons notranslate">chevron_right</i>
        </span>
      );
    }

    return (
      <span className="capitalize" key={item.label}>
        {item.label}
      </span>
    );
  });

  return <section className="app-my-1 app-mx-1">{links}</section>;
}

export default UtilBreadComponent;
