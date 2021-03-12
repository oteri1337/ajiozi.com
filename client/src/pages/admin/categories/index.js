import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../library/components/admin/header";
import Footer from "../../library/components/footer";
import AdminLoggedIn from "../../library/hoc/adminLoggedIn";

class CategoriesIndex extends React.Component {
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
            <span className="ajiozi-social-text">Categories</span>
          </section>

          <div className="card-panel">
            <h4>Manage Categories</h4>

            <div className="row ajiozi-padding-top-three">
              <div className="col l3 m3 s4">
                <Link to="/control/categories/create" className="btn">
                  Create Category
                </Link>
                <br />
                <br />
              </div>

              <div className="col l3 m3 s4">
                <Link to="/control/categories/list" className="btn">
                  Categories List
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

export default AdminLoggedIn(CategoriesIndex);
