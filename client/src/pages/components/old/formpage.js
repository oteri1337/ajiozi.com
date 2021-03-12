import React from "react";
import Input from "./others/input";

class FormPage extends React.Component {
  onChange = event => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [event.target.id]: {
          ...this.state.inputs[event.target.id],
          value: event.target.value
        }
      }
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    let body = {};

    const setValue = key => {
      body[key] = this.state.inputs[key].value;
    };

    Object.keys(this.state.inputs).forEach(setValue);

    body = JSON.stringify(body);

    this.setState({
      fetching: true,
      errors: []
    });

    try {
      let response = await fetch(this.state.endpoint, {
        method: this.state.request || "POST",
        body: body,
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
      });

      this.setState({ fetching: false });
      let json = await response.json();

      if (json.errors.length) {
        this.setState({ errors: json.errors });
      } else {
        this.setState({ success: true });
        if (this.state.redirect) {
          this.props.history.push(this.state.redirect);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  render = () => {};

  componentDidMount = () => {
    this.fetchData();
  };

  renderButton = text => {
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
        <button type="submit" className="btn white-text">
          {text}
        </button>
      </React.Fragment>
    );
  };

  renderErrors = () => {
    if (this.state.errors.length) {
      let errors = this.state.errors.map(error => <p key={error}>{error}</p>);
      return (
        <React.Fragment>
          <div className="alert-danger">
            <br />
            {errors}
            <br />
          </div>
          <br />
        </React.Fragment>
      );
    }
  };

  renderSuccess = () => {
    if (this.state.success) {
      return (
        <React.Fragment>
          <div className="green lighten-4 card-panel">
            message sent successfully
          </div>
        </React.Fragment>
      );
    }
  };

  renderInputs = () => {
    let inputs = this.state.inputs;

    const mapInput = key => {
      return (
        <React.Fragment key={key}>
          <Input
            onChange={this.onChange}
            name={inputs[key].name}
            value={inputs[key].value}
            id={key}
            required={inputs[key].required}
            type={inputs[key].type || "input"}
          />
        </React.Fragment>
      );
    };

    return Object.keys(inputs).map(mapInput);
  };

  fetchData = async () => {
    if (this.state.fetchpoint) {
      try {
        this.setState({ fetching: true });
        let response = await fetch(this.state.fetchpoint);
        this.setState({ fetching: false });

        let json = await response.json();

        if (!json.errors.length) {
          json = this.serializeObject(json);

          const setValue = key => {
            this.setState({
              inputs: {
                ...this.state.inputs,
                [key]: {
                  ...this.state.inputs[key],
                  value: json.data[key]
                }
              }
            });
          };

          Object.keys(json.data).forEach(setValue);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  serializeObject = json => {
    delete json.data.id;
    delete json.data.created_at;
    delete json.data.updated_at;

    return json;
  };
}

export default FormPage;
