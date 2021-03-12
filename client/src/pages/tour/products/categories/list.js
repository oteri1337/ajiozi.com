import React from "react";
import { Link } from "react-router-dom";
import Header from "../../library/components/header";
import Footer from "../../library/components/footer";
import WithContext from "../../library/hoc/withContext";

class ProductsCategories extends React.Component {
  state = {
    errors: [],
    data: {
      data: {}
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
            <span className="ajiozi-social-text">Categories</span>
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
    if (!this.state.data.data.length) {
      return <React.Fragment>No Categories Found</React.Fragment>;
    }

    return this.state.data.data.map(row => {
      return (
        <React.Fragment key={row.id}>
          <div className="col l4 m4 s12">
            <div className="card">
              <div className="card-content">
                <Link to={`/products/categories/${row.slug}`}>
                  <h6>{row.title}</h6>
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  componentDidMount = () => {
    this.requestData();
  };

  requestData = async () => {
    try {
      this.setState({ fetching: true });
      let response = await fetch(`${domain}/api/categories`);
      let json = await response.json();
      this.setState({ errors: json.errors, data: json.data, fetching: false });

      console.log(this.state);
    } catch (error) {
      //console.log(error);
      this.setState({
        errors: [
          "failed to fetch from server, please check your internet connection"
        ]
      });
    }
  };
}

export default WithContext(ProductsCategories);
