import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

class ProductRead extends React.Component {
  state = {
    errors: [],
    data: {
      title: "Loading ..."
    },
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
            <span className="ajiozi-social-text">
              <Link to="/products">Products</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">{this.state.data.title}</span>
          </section>
          <div className="row">{this.renderRow()}</div>
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  renderPrice = price => {
    if (price == "0.00") {
      return (
        <React.Fragment>
          <b>Price Not Available </b>
          <Link to="/contact">Request Quote</Link>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <b>
          <s>N</s> {price}
        </b>
      </React.Fragment>
    );
  };

  renderRow = () => {
    let row = this.state.data;

    if (!row) {
      return <p>Loading ...</p>;
    }

    return (
      <React.Fragment>
        <div className="card-panel">
          <h4>{row.title}</h4>
          <div className="row">
            <div className="col l6 s12">{this.renderImageOne(row)}</div>
            <div className="col l6 s12">{this.renderImageTwo(row)}</div>
            <div className="col l6 s12">{this.renderImageThree(row)}</div>
          </div>
          <div className="row">
            <p>
              {/* <b>
                <s>N</s>
                {row.price}
              </b> */}
              {this.renderPrice(row.price)}
            </p>
            {this.renderCartButton(row.id)}
            <p dangerouslySetInnerHTML={{ __html: row.description }} />
          </div>
        </div>
      </React.Fragment>
    );
  };

  renderCartButton = id => {
    let cart = this.props.context.user.cart || [];
    let cartButton = (
      <React.Fragment>
        <a onClick={this.requestAddToCart} id={id} className="btn waves-effect">
          Add To Cart
        </a>
      </React.Fragment>
    );

    if (cart.length) {
      cart.map(product => {
        if (id == product.id) {
          cartButton = (
            <React.Fragment>
              <a
                onClick={this.requestRemoveFromCart}
                id={id}
                className="btn waves-effect"
              >
                Remove From Cart
              </a>
            </React.Fragment>
          );
        }
      });
    }

    return cartButton;
  };

  renderImageOne = row => {
    let image_one = "";

    if (row.image_one !== "") {
      image_one = (
        <img src={row.image_one} alt={row.title} className="responsive-img" />
      );
    } else {
      image_one = (
        <img src="/images/products/default.jpg" alt="Default Image" />
      );
    }

    return image_one;
  };

  renderImageTwo = row => {
    let image_two = "";

    if (row.image_two !== "") {
      image_two = (
        <img src={row.image_two} alt={row.title} className="responsive-img" />
      );
    } else {
      image_two = <React.Fragment />;
    }

    return image_two;
  };

  renderImageThree = row => {
    let image_three = "";

    if (row.image_three !== "") {
      image_three = (
        <img src={row.image_three} alt={row.title} className="responsive-img" />
      );
    } else {
      image_three = <React.Fragment />;
    }

    return image_three;
  };

  componentDidMount = () => {
    this.requestData();
  };

  requestData = async () => {
    try {
      this.setState({ loading: true });
      let response = await fetch(
        `${domain}/api/products/${this.props.match.params.slug}`
      );
      let json = await response.json();

      this.setState({ errors: json.errors, data: json.data, fetching: false });
    } catch (error) {
      console.log(error);
    }
  };

  requestAddToCart = async e => {
    e.preventDefault();

    // check if user is logged in
    let user = this.props.context.user;
    if (!user) {
      this.props.history.push("/signin");
    }

    let product_id = e.target.id;

    // add product to cart
    this.setState({
      fetching: true,
      errors: []
    });

    let body = JSON.stringify({
      product_id: product_id
    });

    try {
      let response = await fetch(`${domain}/api/carts`, {
        method: "POST",
        body: body,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
      });

      if (response.status === 401) {
        await localStorage.setItem("user_logged", "false");
        window.location = "/signin";
        return;
      }
      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.props.context.setUser(json.data);
        this.render();
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };

  requestRemoveFromCart = async e => {
    e.preventDefault();

    if (!this.props.context.user) {
      this.props.history.push("/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    let body = JSON.stringify({
      product_id: e.target.id
    });

    try {
      let response = await fetch(`${domain}/api/carts`, {
        method: "DELETE",
        body: body,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
      });

      if (response.status === 401) {
        await localStorage.setItem("user_logged", "false");
        window.location = "/signin";
        return;
      }

      let json = await response.json();
      this.setState({ fetching: false });

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.props.context.setUser(json.data);
        this.render();
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };
}

export default ProductRead;
