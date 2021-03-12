import React from "react";
import { Link } from "react-router-dom";
import Header from "../../library/components/header";
import Footer from "../../library/components/footer";
import WithContext from "../../library/hoc/withContext";

class ProductsCategories extends React.Component {
  state = {
    fetching: true,
    errors: [],
    data: {
      products: []
    }
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
            <span className="ajiozi-social-text">
              <Link to="/products/categories">Categories</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">{this.state.data.title}</span>
          </section>

          <br />
          <div className="row">{this.renderList()}</div>
          <br />
          <br />
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  renderList = () => {
    if (this.state.data.products.length === 0) {
      return (
        <React.Fragment>
          <section className="card-panel">
            <h6>No products in this category</h6>
          </section>
        </React.Fragment>
      );
    }

    return this.state.data.products.map(row => {
      return (
        <React.Fragment key={row.id}>
          <div className="col l4 m4 s12">
            <div className="card large">
              <div className="card-image">
                <img src={row.image_one} alt={row.title} />
              </div>
              <div className="card-content">
                <Link to={`/row./${row.slug}`}>{row.title}</Link>
                <br />
                <br />
                <p>{row.description}</p>
              </div>
              <div className="card-action" style={{ fontSize: "1rem" }}>
                {this.renderCartButton(row.id)}
                <Link to="/products/cart">View Cart</Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  renderCartButton = id => {
    let cart = this.props.context.user.cart || [];
    let cartButton = (
      <React.Fragment>
        <a onClick={this.requestAddToCart} id={id}>
          Add To Cart
        </a>
      </React.Fragment>
    );

    if (cart.length) {
      cart.map(product => {
        if (id == product.id) {
          cartButton = (
            <React.Fragment>
              <a onClick={this.requestRemoveFromCart} id={id}>
                Remove From Cart
              </a>
            </React.Fragment>
          );
        }
      });
    }

    return cartButton;
  };

  componentDidMount = () => {
    this.requestData();
  };

  componentDidUpdate = (prevProps, prevState) => {
    let oldSlug = prevProps.match.params.slug;
    let newSlug = this.props.match.params.slug;

    if (oldSlug !== newSlug) {
      this.requestData();
    }
  };

  requestData = async () => {
    let name = this.props.match.params.slug;
    try {
      this.setState({ fetching: true });
      let response = await fetch(`${domain}/api/categories/${name}`);
      let json = await response.json();
      this.setState({
        errors: json.errors,
        data: json.data,
        fetching: false
      });
      console.log("state", this.state);
    } catch (error) {
      console.log(error);
    }
  };

  requestPage = async event => {
    let url = `${domain}${event.target.id}`;
    try {
      this.setState({ fetching: true });
      let response = await fetch(url);
      let json = await response.json();
      this.setState({ data: json.data, errors: json.errors, fetching: false });
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

      console.log(json);

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.props.context.setUser(json.data);
        this.renderList();
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
        this.renderList();
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };
}

export default WithContext(ProductsCategories);
