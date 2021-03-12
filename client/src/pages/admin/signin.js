import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import AdminLoggedOut from "../components/hoc/adminLoggedOut";

class AdminSignin extends React.Component {
  state = {
    errors: [],
    fetching: false,
    email: "",
    password: ""
  };

  render = () => {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className="container">
            <section className="ajiozi-navigation">
              <span className="ajiozi-social-text">
                <Link to="/">Home</Link>
              </span>
              <i className="material-icons">chevron_right</i>
              <span className="ajiozi-social-text">Control Panel</span>
              <i className="material-icons">chevron_right</i>

              <span className="ajiozi-social-text">Sign In</span>
            </section>
            <div className="row">
              <div className="col s12 m12 l6 offset-l3">
                <div className="card-panel z-depth-2">
                  <h4>Control Panel Sign In</h4>
                  <br />

                  <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                      <label>email</label>
                      <input
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className="input-field">
                      <label>password</label>
                      <input
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    {this.renderErrors()}
                    {this.renderButton()}
                  </form>
                </div>
              </div>
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
          Sign In
        </button>
      </React.Fragment>
    );
  };

  renderErrors = () => {
    if (this.state.errors.length) {
      let errors = this.state.errors.map(error => <p key={error}>{error}</p>);
      return (
        <React.Fragment>
          <div className="red lighten-4 card-panel">{errors}</div>
        </React.Fragment>
      );
    }
  };

  onChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    this.setState({
      fetching: true,
      errors: []
    });

    let body = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    });

    try {
      let response = await fetch(`${domain}/api/admins/auth/signin`, {
        method: "POST",
        body: body,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
      });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors, fetching: false });
      } else {
        await localStorage.setItem("admin_logged", "true");
        this.props.context.setAdmin(json.data);
        window.location = "/control";
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    M.updateTextFields();
    console.log(this.props);
  };
}

export default AdminLoggedOut(AdminSignin);
