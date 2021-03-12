import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import UserLoggedIn from "../../components/hoc/userLoggedIn";

class ProductsCart extends React.Component {
  state = {
    errors: [],
    data: [],
    fetching: false
  };

  render = () => {
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <section className="ajiozi-navigation">
            <span className="ajiozi-social-text">
              <Link to="/">Home</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">Transaction History</span>
          </section>

          <div className="card-panel center-align">
            <h4 className="left-align">Transaction History</h4>
            <table className="striped">
              <thead>
                <tr>
                  <th />
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAYMENT STATUS</th>
                  <th>DELIVERY STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>{this.renderList()}</tbody>
            </table>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  renderList = () => {
    let orders = this.props.context.user.orders || [];

    if (!orders) {
      return <p>You have no orders</p>;
    }

    return orders.map(order => {
      switch (order.payment_status) {
        case 0:
          order.payment_status = "Pending";
          break;
        case 1:
          order.payment_status = "Paid";
          break;
        case 2:
          order.payment_status = "Cancelled";
          break;
      }

      switch (order.delivery_status) {
        case 0:
          order.delivery_status = "Pending";
          break;
        case 1:
          order.delivery_status = "Delivered";
          break;
        case 2:
          order.delivery_status = "Cancelled";
          break;
      }

      return (
        <tr>
          <td>{order.id}</td>
          <td>{order.created_at}</td>
          <td>
            <s>N</s>
            {order.total}
          </td>
          <td>{order.payment_status}</td>
          <td>{order.delivery_status}</td>
          <td>{/* <Link to="/">View</Link> */}</td>
        </tr>
      );
    });
  };
}

export default UserLoggedIn(ProductsCart);
