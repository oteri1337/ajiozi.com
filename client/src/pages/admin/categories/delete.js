import React from "react";
import { Link } from "react-router-dom";
import AdminLoggedIn from "../../library/hoc/adminLoggedIn";
import Footer from "../../library/components/footer";
import AdminHeader from "../../library/components/admin/header";

class CategoryDelete extends React.Component {
  state = {
    errors: [],
    fetching: false,
    parcel: {}
  };

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
            <span className="ajiozi-social-text">
              <Link to="/control/categories">Categories</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">Delete</span>
          </section>

          <div className="card-panel">
            <h4>Delete Category</h4>
            <p>Are you sure you want to delete this category?</p>
            <p>{this.renderFetching()}</p>
            {this.renderErrors()}
            <button onClick={this.delete} className="red btn">
              Yes
            </button>
            <Link to="/control/products/list" className="white btn black-text">
              No
            </Link>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  renderFetching = () => {
    return this.state.fetching ? "Deleting Parcel..." : "";
  };

  renderErrors = () => {
    if (this.state.errors.length) {
      let errors = this.state.errors.map(error => <p key={error}>{error}</p>);
      return (
        <React.Fragment>
          <div className="alert-danger">
            <br />
            {errors}
            <br />
          </div>
          <br />
        </React.Fragment>
      );
    }
  };

  delete = async () => {
    let id = this.props.match.params.slug;

    try {
      let response = await fetch(`${domain}/api/categories/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
      });
      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.props.history.push("/control/categories/list");
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };
}

export default AdminLoggedIn(CategoryDelete);
