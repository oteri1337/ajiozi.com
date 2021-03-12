import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

class UserHome extends React.Component {
  render = () => {
    //let user = this.props.context.user || {};
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
              <span className="ajiozi-social-text">My Account</span>
            </section>

            <div className="card-panel">
              {/* <h4>
                {user.first_name} {user.last_name}
              </h4>
              <div className="row">
                <div className="col l6 s12">
                  <table className="striped">
                    <tbody>{this.renderRow()}</tbody>
                  </table>
                </div> */}
              <div className="col l5 offset-l1 s12 ajiozi-margin">
                <Link to="/products/orders" className="btn">
                  Orders
                </Link>
                <br />
                <br />
                <Link to="/signout" className="btn">
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  renderRow = () => {
    let user = this.props.context.user;
    delete user.cart;
    delete user.products;
    delete user.orders;

    let keys = Object.keys(user);

    return keys.map(key => {
      return (
        <tr key={key}>
          <td style={{ textTransform: "uppercase" }}>{key}</td>
          <td>{user[key]}</td>
        </tr>
      );
    });
  };
}

export default UserHome;
