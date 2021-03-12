import React from "react";

const Context = React.createContext();

export class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
      admin: false,
      user_logged: false,
      admin_logged: false,
      categories: [],
      setUser: this.setUser,
      setAdmin: this.setAdmin,
      clientUserSignOut: this.clientUserSignOut,
      clientAdminSignOut: this.clientAdminSignOut,
      serverUserSignOut: this.serverAdminSignOut,
      serverAdminSignOut: this.serverAdminSignOut,
      getClientUserAuthState: this.getClientUserAuthState,
      getClientAdminAuthState: this.getClientAdminAuthState
    };
    this.getClientUserAuthState();
    this.getClientAdminAuthState();
    this.getCategories();
  }

  getClientUserAuthState = async () => {
    let auth = await localStorage.getItem("user_logged");
    if (auth === "true") {
      this.setState({
        user_logged: true
      });
    }
    this.setUser();
  };

  getClientAdminAuthState = async () => {
    let auth = await localStorage.getItem("admin_logged");
    if (auth === "true") {
      this.setState({
        admin_logged: true
      });
      this.setAdmin();
    }
  };

  getCategories = async () => {
    try {
      let response = await fetch(`${domain}/api/categories`);
      let json = await response.json();
      this.setState({ categories: json.data.data });
    } catch (error) {
      console.log("error from context", error);
    }
  };

  setUser = async (user = false) => {
    if (user) {
      return this.setState({ ...this.state, user: user });
    }

    try {
      let response = await fetch(`${domain}/api/users/me`, {
        credentials: "include"
      });
      let json = await response.json();

      if (!json.errors.length) {
        this.setState({ ...this.state, user: json.data });
      } else {
        await localStorage.setItem("user_logged", "false");
      }
    } catch (error) {
      console.log(error);
    }
  };

  setAdmin = async (admin = false) => {
    if (admin) {
      return this.setState({ ...this.state, admin: admin });
    }

    try {
      let response = await fetch(`${domain}/api/admins/me`, {
        credentials: "include"
      });
      let json = await response.json();

      if (!json.errors.length) {
        this.setState({ ...this.state, admin: json.data });
      } else {
        await localStorage.setItem("admin_logged", "false");
      }
    } catch (error) {
      console.log(error);
    }
  };

  clientUserSignOut = async () => {};

  serverUserSignOut = async () => {};

  clientAdminSignOut = async () => {};

  serverAdminSignOut = async () => {};

  getRequest = () => {};

  postRequest = () => {};

  render = () => {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  };
}

export const Consumer = Context.Consumer;
