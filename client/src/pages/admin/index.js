import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin/header";
import Footer from "../components/footer";
import AdminLoggedIn from "../components/hoc/adminLoggedIn";

class AdminIndex extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <AdminHeader />

        <main className="container">
          <section className="ajiozi-navigation">
            <span className="ajiozi-social-text">
              <Link to="/">Home</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">Control Panel</span>
          </section>

          <div className="card-panel">
            <h4>Control Panel</h4>

            <div className="row ajiozi-padding-top-three">
              <div className="col l3 m3 s4">
                <Link to="/control/orders" className="btn">
                  Orders
                </Link>
              </div>
              <div className="col l3 m3 s4">
                <Link to="/control/products" className="btn">
                  Products
                </Link>
              </div>
              <div className="col l3 m3 s4">
                <Link to="/control/categories" className="btn">
                  Categories
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </React.Fragment>
    );
  };
}

export default AdminLoggedIn(AdminIndex);
