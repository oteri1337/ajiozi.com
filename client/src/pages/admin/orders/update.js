import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../library/components/admin/header";
import Footer from "../../library/components/footer";
import AdminLoggedIn from "../../library/hoc/adminLoggedIn";

class OrderUpdate extends React.Component {
  state = {
    data: {},
    errors: [],
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
            <span className="ajiozi-social-text">
              <Link to="/control/orders">Orders</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">Update</span>
          </section>

          <div className="card-panel">
            <h4>Update Order</h4>

            <table className="striped">
              <tbody>{this.renderRow()}</tbody>
            </table>

            <div className="row ajiozi-padding-top-three">
              <form method="POST" onSubmit={this.onSubmit}>
                <div>
                  <label>Payment Status</label>
                  <select
                    id="payment_status"
                    value={this.state.data.payment_status}
                    onChange={this.onChange}
                  >
                    <option value="0">Pending</option>
                    <option value="1">Paid</option>
                    <option value="2">Cancelled</option>
                  </select>
                </div>
                <br />
                <br />

                <div>
                  <label>Delivery Status</label>
                  <select
                    id="delivery_status"
                    value={this.state.data.delivery_status}
                    onChange={this.onChange}
                  >
                    <option value="0">Pending</option>
                    <option value="1">Delivered</option>
                    <option value="2">Cancelled</option>
                  </select>
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

  renderRow = () => {
    let orders = this.state.data;
    console.log(orders);
    let keys = Object.keys(orders);

    return keys.map(key => {
      // switch (order.payment_status) {
      //   case 0:
      //     order.payment_status = "Pending";
      //     break;
      //   case 1:
      //     order.payment_status = "Paid";
      //     break;
      //   case 2:
      //     order.payment_status = "Cancelled";
      //     break;
      // }

      // switch (order.delivery_status) {
      //   case 0:
      //     order.delivery_status = "Pending";
      //     break;
      //   case 1:
      //     order.delivery_status = "Delivered";
      //     break;
      //   case 2:
      //     order.delivery_status = "Cancelled";
      //     break;
      // }

      return (
        <tr key={key}>
          <td style={{ textTransform: "uppercase" }}>{key}</td>
          <td>{orders[key]}</td>
        </tr>
      );
    });
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
          Update
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
    let data = this.state.data;
    data[event.target.id] = event.target.value;

    this.setState({ data });
  };

  onSubmit = async e => {
    e.preventDefault();

    this.setState({
      fetching: true,
      errors: []
    });

    let body = JSON.stringify(this.state.data);

    try {
      let response = await fetch(
        `${domain}/api/orders/${this.props.match.params.slug}`,
        {
          method: "PATCH",
          body: body,
          credentials: "include",
          headers: {
            "content-type": "application/json"
          }
        }
      );
      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.props.history.push("/control/orders");
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };

  componentDidMount = () => {
    this.requestData();
    var select_elems = document.querySelectorAll("select");
    var select_options = {};
    M.FormSelect.init(select_elems, select_options);
  };

  componentDidUpdate = () => {
    var select_elems = document.querySelectorAll("select");
    var select_options = {};
    M.FormSelect.init(select_elems, select_options);
  };

  requestData = async () => {
    let name = this.props.match.params.slug;
    try {
      this.setState({ fetching: true });
      let response = await fetch(`${domain}/api/orders/${name}`);
      let json = await response.json();
      this.setState({
        errors: json.errors,
        data: json.data,
        fetching: false
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export default AdminLoggedIn(OrderUpdate);
