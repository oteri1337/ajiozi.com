import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../library/components/admin/header";
import Footer from "../../library/components/footer";
import AdminLoggedIn from "../../library/hoc/adminLoggedIn";

class ProductUpdate extends React.Component {
  state = {
    fetching: false,
    errors: [],
    data: {
      id: "",
      slug: "",
      title: "",
      price: "",
      image_one: "",
      stock: "",
      description: "",
      categories: []
    }
  };

  categories = [];
  selectedCategories = [];

  onChange = () => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.id]: event.target.value
      }
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    // check if admin is logged in
    let admin = this.props.context.admin;
    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    let postData = this.state.data;

    delete postData.image_one;
    delete postData.image_two;
    delete postData.image_three;

    //postData.price = parseFloat(postData.price.replace(",", ""));

    let body = JSON.stringify(postData);

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}`,
        {
          method: "PATCH",
          body: body,
          credentials: "include",
          headers: {
            "content-type": "application/json"
          }
        }
      );
      let json = await response.json();

      this.setState({ fetching: false });

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.props.history.push("/control/products/list");
      }
    } catch (error) {
      console.log("an error occured", error);
    }
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
            <span className="ajiozi-social-text">Update Product</span>
          </section>

          <div className="card-panel">
            <h4>Update Product</h4>

            <div className="row">
              <div className="col l6">
                <h6>Images</h6>
                {this.renderImageone()}
                <br />
                {this.renderImagetwo()}
                <br />
                {this.renderImagethree()}
                <br />
              </div>

              <div className="col l6 s12 ajiozi-margin-bottom">
                <div className="card-panel">
                  <h6 className="ajiozi-margin-bottom">Update Images</h6>

                  <form onSubmit={this.requestImageOne}>
                    <div className="file-field input-field">
                      <div className="btn">
                        <span>Image One</span>
                        <input type="file" id="image_one" />
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>
                    {this.renderButton()}
                    <br />
                    <br />
                    <br />
                    <br />
                  </form>

                  <form onSubmit={this.requestImageTwo}>
                    <div className="file-field input-field">
                      <div className="btn">
                        <span>Image Two</span>
                        <input type="file" id="image_two" />
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>
                    {this.renderButton()}
                    <br />
                    <br />
                    <br />
                    <br />
                  </form>

                  <form onSubmit={this.requestImageThree}>
                    <div className="file-field input-field">
                      <div className="btn">
                        <span>Image Three</span>
                        <input type="file" id="image_three" />
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>
                    {this.renderButton()}
                  </form>
                </div>
              </div>
            </div>

            <div className="row ajiozi-padding-top-three">
              <div className="col l6 s12">
                <div className="card-panel">
                  <h6 className="ajiozi-margin-bottom">Details</h6>
                  <form method="POST" onSubmit={this.onSubmit}>
                    <div className="input-field">
                      <label className="active">Product Title</label>
                      <input
                        type="text"
                        id="title"
                        value={this.state.data.title}
                        onChange={this.onChange}
                      />
                      <br />
                      <br />
                    </div>
                    <div className="input-field">
                      <label>URL Slug</label>
                      <input
                        type="text"
                        id="slug"
                        value={this.state.data.slug}
                        onChange={this.onChange}
                      />
                      <br />
                      <br />
                    </div>
                    <div className="input-field">
                      <label className="active">Price In Naira</label>
                      <input
                        type="text"
                        id="price"
                        value={this.state.data.price}
                        onChange={this.onChange}
                      />
                      <br />
                      <br />
                    </div>
                    <div className="input-field">
                      <label className="active">In Stock</label>
                      <input
                        type="text"
                        id="stock"
                        value={this.state.data.stock}
                        onChange={this.onChange}
                      />
                      <br />
                      <br />
                    </div>
                    <div className="input-field">
                      <label>Product Description</label>
                      <textarea
                        id="description"
                        className="materialize-textarea"
                        value={this.state.data.description}
                        onChange={this.onChange}
                      />
                    </div>

                    {this.renderErrors()}
                    {this.renderButton()}
                  </form>
                </div>
              </div>

              <div className="col l6 s12 ">
                <div className="card-panel ajiozi-margin-bottom">
                  <h6 className="ajiozi-margin-bottom">Categories</h6>
                  <form onSubmit={this.requestCatUpdate}>
                    <div className="ajiozi-margin-top-three">
                      {this.renderCategories()}
                      {this.renderButton()}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  componentDidMount = () => {
    this.requestData();
  };

  requestImageOne = async e => {
    e.preventDefault();

    // check if admin is logged in
    let admin = this.props.context.admin;

    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    let files = document.querySelector("#image_one").files;
    let formData = new FormData();
    formData.append("image", files[0]);

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}/image_one`,
        {
          method: "POST",
          body: formData,
          credentials: "include"
        }
      );
      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
      }
    } catch (error) {
      this.setState({ fetching: false });
    }
  };

  requestImageTwo = async e => {
    e.preventDefault();

    // check if admin is logged in
    let admin = this.props.context.admin;

    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    let files = document.querySelector("#image_two").files;
    let formData = new FormData();
    formData.append("image", files[0]);

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}/image_two`,
        {
          method: "POST",
          body: formData,
          credentials: "include"
        }
      );
      this.setState({ fetching: false });
      let json = await response.json();
      console.log(json);

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
      }
    } catch (error) {
      this.setState({ fetching: false });
    }
  };

  requestImageThree = async e => {
    e.preventDefault();

    // check if admin is logged in
    let admin = this.props.context.admin;
    console.log("image three");

    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    let files = document.querySelector("#image_three").files;
    let formData = new FormData();
    formData.append("image", files[0]);

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}/image_three`,
        {
          method: "POST",
          body: formData,
          credentials: "include"
        }
      );
      this.setState({ fetching: false });
      let json = await response.json();
      console.log(json);

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
      }
    } catch (error) {
      this.setState({ fetching: false });
    }
  };

  requestRemoveImageOne = async e => {
    e.preventDefault();

    // check if admin is logged in
    let admin = this.props.context.admin;

    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}/image_one`,
        {
          method: "DELETE",
          credentials: "include"
        }
      );
      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
      }
    } catch (error) {
      this.setState({ fetching: false });
    }
  };

  requestRemoveImageTwo = async e => {
    e.preventDefault();

    // check if admin is logged in
    let admin = this.props.context.admin;

    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}/image_two`,
        {
          method: "DELETE",
          credentials: "include"
        }
      );
      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
      }
    } catch (error) {
      this.setState({ fetching: false });
    }
  };

  requestRemoveImageThree = async e => {
    e.preventDefault();

    // check if admin is logged in
    let admin = this.props.context.admin;

    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}/image_three`,
        {
          method: "DELETE",
          credentials: "include"
        }
      );
      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
      }
    } catch (error) {
      this.setState({ fetching: false });
    }
  };

  requestData = async () => {
    try {
      this.setState({ fetching: true });
      let slug = this.props.match.params.slug;
      let response = await fetch(`${domain}/api/products/${slug}`);

      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
        M.updateTextFields();
        console.log(this.state);
      }
    } catch (error) {
      console.log(error);
    }
  };

  renderImageone = () => {
    let image_one = <div>No Image 1</div>;

    if (this.state.data.image_one !== "") {
      image_one = (
        <React.Fragment>
          <img
            src={this.state.data.image_one}
            alt="Image One"
            className="responsive-img"
            style={{ height: "50vh" }}
          />
          <br />
          <a onClick={this.requestRemoveImageOne}>Remove Image 1</a>
          <br />
          <br />
        </React.Fragment>
      );
    }

    return image_one;
  };

  renderImagetwo = () => {
    let image_two = <div>No Image 2</div>;

    if (this.state.data.image_two !== "") {
      image_two = (
        <React.Fragment>
          <img
            src={this.state.data.image_two}
            alt="Image two"
            className="responsive-img"
            style={{ height: "50vh" }}
          />
          <br />
          <a onClick={this.requestRemoveImageTwo}>Remove Image 2</a>
          <br />
          <br />
        </React.Fragment>
      );
    }

    return image_two;
  };

  renderImagethree = () => {
    let image_three = <div>No Image 3</div>;

    if (this.state.data.image_three !== "") {
      image_three = (
        <React.Fragment>
          <img
            src={this.state.data.image_three}
            alt="Image three"
            className="responsive-img"
            style={{ height: "50vh" }}
          />
          <br />
          <a onClick={this.requestRemoveImageThree}>Remove Image 3</a>
          <br />
          <br />
        </React.Fragment>
      );
    }

    return image_three;
  };

  renderButton = () => {
    if (this.state.fetching) {
      return (
        <React.Fragment>
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

  renderCategories = () => {
    if (this.state.catFetching) {
      return <React.Fragment>Updating Categories ...</React.Fragment>;
    }

    let propsCategories = this.props.context.categories;
    let stateCategories = this.state.data.categories;

    if (!propsCategories.length) {
      return <React.Fragment>No Categories Found</React.Fragment>;
    }

    let categories = [];

    stateCategories.forEach(stateCategory => {
      categories.push(stateCategory.id);
    });

    this.categories = categories;

    return propsCategories.map(propCategory => {
      let boolean = this.categories.indexOf(propCategory.id);
      let checked;

      if (boolean > -1) {
        checked = true;
      }

      return (
        <p key={propCategory.id}>
          <label htmlFor={propCategory.id}>
            <input
              type="checkbox"
              id={propCategory.id}
              defaultChecked={checked}
              onChange={this.onCatChange}
            />
            <span>{propCategory.title}</span>
          </label>
        </p>
      );
    });
  };

  onCatChange = e => {
    let id = parseInt(e.target.id);
    let checked = e.target.checked;

    if (checked) {
      this.selectedCategories.push(id);
    } else {
      this.selectedCategories.pop(id);
    }
  };

  requestCatUpdate = async e => {
    e.preventDefault();
    console.log(this.categories);

    // check if admin is logged in
    let admin = this.props.context.admin;

    if (!admin) {
      this.props.history.push("/control/signin");
    }

    this.setState({
      fetching: true,
      errors: []
    });

    let postData = { categories: this.selectedCategories };
    let body = JSON.stringify(postData);

    try {
      let response = await fetch(
        `${domain}/api/products/${this.state.data.id}/sync/categories`,
        {
          method: "POST",
          body: body,
          credentials: "include",
          headers: {
            "content-type": "application/json"
          }
        }
      );
      let json = await response.json();

      this.setState({ fetching: false });

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ data: json.data });
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };
}

export default AdminLoggedIn(ProductUpdate);
