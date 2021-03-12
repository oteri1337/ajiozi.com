import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../library/components/admin/header";
import Footer from "../../library/components/footer";
import WithContext from "../../library/hoc/withContext";

class Products extends React.Component {
  state = {
    errors: [],
    data: {
      data: []
    },
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
              <Link to="/control/products">Products</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">List</span>
          </section>
          {/* {this.renderPagination()} */}

          <br />
          <div className="row">{this.renderList()}</div>

          {this.renderPagination()}
          <br />
          <br />
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  renderList = () => {
    if (!this.state.data.data) {
      return <React.Fragment>No Products</React.Fragment>;
    }

    return this.state.data.data.map(row => {
      return (
        <React.Fragment key={row.id}>
          <div className="col l4 m4 s12">
            <div className="card large">
              <div className="card-image">
                <img src={row.image_one} alt={row.title} />
              </div>
              <div className="card-content">
                <b>{row.title}</b>
                <p>
                  <s>N</s>
                  {row.price}
                </p>
                <br />
                <br />
                <p>{row.description}</p>
              </div>
              <div className="card-action">
                <Link to={`/control/products/update/${row.slug}`}>Update</Link>
                <Link to={`/control/products/delete/${row.id}`}>Delete</Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  renderPagination = () => {
    let nextPage = this.state.data.next_page_url || false;
    let nextIcon = <React.Fragment />;

    if (nextPage) {
      nextIcon = (
        <li className="waves-effect">
          <a>
            <i
              id={this.state.data.next_page_url}
              onClick={this.requestPage}
              className="material-icons"
            >
              chevron_right
            </i>
          </a>
        </li>
      );
    }

    return (
      <React.Fragment>
        <ul className="pagination">
          {nextIcon}
          <li>
            ({this.state.data.current_page} / {this.state.data.last_page})
          </li>
        </ul>
      </React.Fragment>
    );
  };

  componentDidMount = () => {
    this.requestData();
  };

  requestData = async () => {
    try {
      this.setState({ fetching: true });
      let response = await fetch(`${domain}/api/products`);
      let json = await response.json();
      this.setState({ errors: json.errors, data: json.data, fetching: false });
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
      this.setState({ fetching: false });

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        let newlist = [...this.state.data.data, ...json.data.data];
        json.data.data = newlist;
        this.setState({ data: json.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default WithContext(Products);
