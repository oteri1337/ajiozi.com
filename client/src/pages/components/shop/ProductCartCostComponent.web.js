import React from "react";
import { Context, request } from "../../../Routes.web";
import SubmitComponent from "../utilities/UtilSubmitComponent";
import OrderCreateComponent from "./OrderCreateComponent";

function ProductOrderComponent(props) {
  const store = React.useContext(Context);
  const [state, setState] = React.useState({
    fetching: false,
    response: {
      errors: [],
      data: {}
    }
  });

  React.useEffect(() => {
    store.callReducer({ type: "UPDATE_CART_READY", data: false });
  }, []);

  const onClick = async () => {
    setState({ ...state, fetching: true });

    const body = { products: store.state.user.cart };
    let response = await request("/api/users/cart/getcost", "POST", body);
    setState({ fetching: false, response });

    if (response.errors.length === 0) {
      store.callReducer({ type: "UPDATE_CART_READY", data: true });
    }
  };

  console.log(store.state);

  if (!store.state.cartIsReady) {
    return (
      <center>
        <SubmitComponent
          text="Get Total Cost"
          onClick={onClick}
          fetching={state.fetching}
        />
      </center>
    );
  }

  return (
    <React.Fragment>
      <center>
        <div className="card-panel">
          <h2 className="h4 app-py-0 app-my-0">Total Cost</h2>
          <p>
            <b>Products</b> <s>N</s>
            {state.response.data.products}
          </p>
          <p>
            <b>Shipping</b> <s>N</s>
            {state.response.data.shipping}
          </p>
          <p>
            <b>Total</b> <s>N</s>
            {state.response.data.sum}
          </p>
        </div>
        <br />
        <div className="card-panel">
          <OrderCreateComponent {...props} />
        </div>
      </center>
    </React.Fragment>
  );
}

export default ProductOrderComponent;
