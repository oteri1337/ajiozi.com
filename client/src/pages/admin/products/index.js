import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../library/components/admin/header";
import Footer from "../../library/components/footer";
import AdminLoggedIn from "../../library/hoc/adminLoggedIn";

class ProductsIndex extends React.Component {
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
            <span className="ajiozi-social-text">
              <Link to="/control">Control Panel</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">Products</span>
          </section>

          <div className="card-panel">
            <h4>Manage Products</h4>

            <div className="row ajiozi-padding-top-three">
              <div className="col l3 m3 s4">
                <Link to="/control/products/create" className="btn">
                  Create Product
                </Link>
                <br />
                <br />
              </div>

              <div className="col l3 m3 s4">
                <Link to="/control/products/list" className="btn">
                  Products List
                </Link>
                <br />
                <br />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </React.Fragment>
    );
  };
}

export default AdminLoggedIn(ProductsIndex);
