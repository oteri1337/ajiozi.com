import React from "react";
import AdminLoggedOut from "../components/hoc/adminLoggedOut";
import Header from "../components/admin/header";
import Footer from "../components/footer";

class AdminSignOut extends React.Component {
  constructor(props) {
    super(props);
    this.signOut();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <br />
              <br />
              <br />
              <h1>SIGNING OUT..</h1>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }

  signOut = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_URL}/api/admins/auth/signout`,
        {
          credentials: "include",
          headers: {
            "content-type": "application/json"
          }
        }
      );

      let json = await response.json();

      console.log(json.data);

      this.props.history.push("/control/signin");
    } catch (error) {
      console.log("an error occured");
    }
  };
}

export default AdminLoggedOut(AdminSignOut);
