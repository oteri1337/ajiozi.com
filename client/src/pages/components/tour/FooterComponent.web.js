import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render = () => {
    let padHtml = "";

    if (this.props.padding !== false) {
      padHtml = (
        <React.Fragment>
          <br />
          <br />
          <br />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <footer>
          {padHtml}
          <div className="card-panel">
            <div className="container">
              <div className="row">
                <div className="col l6 m6 s12">
                  <h5 className="blue-text text-darken-3">Ajiozi</h5>
                  31 Airport Road, Warri, Delta State, Nigeria.
                  <br />
                  &copy; Copyright 2018.
                  <br />
                  <br />
                  <a href="https://facebook.com/ajiozinitiative">
                    <span
                      className="icon-facebook-f"
                      style={{
                        fontSize: "1.9rem",
                        margin: "0.5rem",
                        color: "#999"
                      }}
                    />
                  </a>
                  <a href="https://twitter.com/ajioz1">
                    <span
                      className="icon-twitter"
                      style={{
                        fontSize: "2rem",
                        margin: "0.5rem",
                        color: "#999"
                      }}
                    />
                  </a>
                  <a href="https://instagram.com/ajioz1">
                    <span
                      className="icon-instagram"
                      style={{
                        fontSize: "2rem",
                        margin: "0.5rem",
                        color: "#999"
                      }}
                    />
                  </a>
                  <br />
                  <br />
                </div>
                <div className="col l2 m3 s12 left">
                  <h6>
                    <b>RESOURCES</b>
                  </h6>
                  <Link to="/resources/values">Values</Link>
                  <br />
                  <Link to="/resources/mission">Mission</Link>
                  <br />
                  <Link to="/resources/careers">Careers</Link>
                  <br />


                  <Link to="/resources/company">Company</Link>
                  <br />
                  <Link to="/resources/leadership">Leadership</Link>
                  <br />
                  <br />
                  <br />
                </div>

                <div className="col l4 m3 s12 left">
                  <h6>
                    <b>PRODUCTS</b>
                  </h6>
                  {/* {this.renderCategories()} */}
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="grey lighten-4">
            <div className="row">
              <div className="col l2 offset-l6 center">
                <br />
                <i className="material-icons ajiozi-social">mail</i>
                <span>ajiozi@ajiozi.com</span>
                <br />
              </div>
              <div className="col l4 center">
                <br />
                <i className="material-icons ajiozi-social">phone</i>
                <span>
                  +234 808 051 2977, +234 806 410 7055
                </span>
                <br />
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  };

  renderCategories = () => {
    if (this.props.context.categories.length !== 0) {
      return this.props.context.categories.map(cat => {
        return (
          <React.Fragment key={cat.id}>
            <Link to={`/products/categories/${cat.slug}`}>{cat.title}</Link>
            <br />
          </React.Fragment>
        );
      });
    }
  };
}

export default Footer;
