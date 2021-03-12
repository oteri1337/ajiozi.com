import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../library/components/admin/header";
import Footer from "../../library/components/footer";
import AdminLoggedIn from "../../library/hoc/adminLoggedIn";

class AdminOrders extends React.Component {
  state = {
    errors: [],
    data: [],
    fetching: false
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
            <span className="ajiozi-social-text">Orders</span>
          </section>

          <div className="card-panel center-align">
            <h4 className="left-align">Orders</h4>
            <br />
            <table className="striped">
              <thead>
                <tr>
                  <th>ORDER TOTAL</th>
                  <th>PAYMENT STATUS</th>
                  <th>DELIVERY STATUS</th>
                  <th>PAYMENT METHOD</th>
                  <th>MOBILE NUMBER</th>
                  <th>DELIVERY ADDRESS</th>
                  <th />
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
    let orders = this.state.data || [];

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

      switch (order.payment_method) {
        case 0:
          order.payment_method = "Pay on delivery";
          break;
        case 1:
          order.payment_method = "Pay with card";
          break;
      }

      return (
        <tr>
          {/* <td>{order.id}</td>
          <td>{order.created_at}</td> */}
          <td>
            <s>N</s>
            {order.total}
          </td>
          <td>{order.payment_status}</td>
          <td>{order.delivery_status}</td>
          <td>{order.payment_method}</td>
          <td>{order.mobile}</td>
          <td>{order.address}</td>
          <td>
            <Link to={`/control/orders/update/${order.id}`}> Update</Link>
          </td>
        </tr>
      );
    });
  };

  componentDidMount = () => {
    this.requestData();
  };

  requestData = async () => {
    try {
      this.setState({ fetching: true });
      let response = await fetch(`${domain}/api/orders`);
      let json = await response.json();
      this.setState({
        errors: json.errors,
        data: json.data.data,
        fetching: false
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default AdminLoggedIn(AdminOrders);
