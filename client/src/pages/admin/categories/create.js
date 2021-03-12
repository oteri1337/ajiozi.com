import React from "react";
import { Link } from "react-router-dom";
import AdminLoggedIn from "../../library/hoc/adminLoggedIn";
import Footer from "../../library/components/footer";
import AdminHeader from "../../library/components/admin/header";

class AdminCategoryCreate extends React.Component {
  state = {
    data: {
      title: "",
      slug: ""
    },
    fetching: false,
    errors: []
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
            <span className="ajiozi-social-text">Create Category</span>
          </section>

          <div className="card-panel">
            <h4>Create Category</h4>

            <div className="row ajiozi-padding-top-three">
              <form method="POST" onSubmit={this.onSubmit}>
                <div className="input-field">
                  <label>Category Title</label>
                  <input
                    type="text"
                    id="title"
                    placeholder=""
                    value={this.state.data.title}
                    onChange={this.onTitleChange}
                  />
                </div>
                <br />
                <br />

                <div className="input-field">
                  <label>URL Slug</label>
                  <input
                    type="text"
                    placeholder=" "
                    id="slug"
                    value={this.state.data.slug}
                    onChange={this.onChange}
                  />
                </div>

                {this.renderErrors()}
                {this.renderButton()}
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  renderButton = () => {
    if (this.state.fetching) {
      return (
        <React.Fragment>
          <br />
          <br />
          <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <br />
        <br />
        <button type="submit" className="btn white-text">
          Create
        </button>
      </React.Fragment>
    );
  };

  renderErrors = () => {
    if (this.state.errors.length) {
      let errors = this.state.errors.map(error => <p key={error}>{error}</p>);
      return (
        <React.Fragment>
          <div className="red lighten-4 card-panel">
            {errors}

            <br />
          </div>
        </React.Fragment>
      );
    }
  };

  onChange = () => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.id]: event.target.value
      }
    });
  };

  onTitleChange = () => {
    let slug = event.target.value
      .toString()
      .toLowerCase()
      .replace(/[^A-Za-z0-9-]+/g, "-");

    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.id]: event.target.value,
        slug: slug
      }
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    this.setState({
      fetching: true,
      errors: []
    });

    let body = JSON.stringify(this.state.data);

    try {
      let response = await fetch(`${domain}/api/categories`, {
        method: "POST",
        body: body,
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

export default AdminLoggedIn(AdminCategoryCreate);
