import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../library/components/admin/header";
import Footer from "../../library/components/footer";
import WithContext from "../../library/hoc/withContext";

class AdminCategoryList extends React.Component {
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
              <Link to="/control/categories">Categories</Link>
            </span>
            <i className="material-icons">chevron_right</i>
            <span className="ajiozi-social-text">List</span>
          </section>
          {/* {this.renderPagination()} */}

          <br />
          <div className="row">{this.renderList()}</div>
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
                <b>{row.title}</b>
              </div>
              <div className="card-action">
                <Link to={`/control/categories/update/${row.slug}`}>
                  Update
                </Link>
                <Link to={`/control/categories/delete/${row.id}`}>Delete</Link>
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
    } catch (error) {
      console.log(error);
    }
  };
}

export default WithContext(AdminCategoryList);
