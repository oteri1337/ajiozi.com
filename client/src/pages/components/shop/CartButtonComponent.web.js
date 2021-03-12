import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Context, useStoreRequest } from "../../../Routes";

function AddToCartComponent(props) {
  const { state, onDone, store } = useStoreRequest(
    "/api/users/cart",
    "POST",
    "UPDATE_USER"
  );

  const onButtonCliked = async event => {
    if (!store.state.user) {
      props.history.push("/user/auth/signin.html");
    }

    event.preventDefault();
    await onDone({ product_id: props.id });
  };

  return (
    <Fragment>
      <a onClick={onButtonCliked}>ADD TO CART</a>
      <Link to="/user/shop/cart.html">View Cart</Link>
    </Fragment>
  );
}

function RemoveFromCartComponent(props) {
  const { state, onDone, store } = useStoreRequest(
    "/api/users/cart",
    "DELETE",
    "UPDATE_USER"
  );

  const onButtonCliked = async event => {
    event.preventDefault();
    await onDone({ product_id: props.id });
  };

  return <a onClick={onButtonCliked}>REMOVE FROM CART</a>;
}

function CartButtonComponent(props) {
  const store = React.useContext(Context);
  const cart = store.state.user.cart || [];
  const product_id = props.id;

  const productIsInCart = cart.find(product => product.id == product_id);

  if (productIsInCart) {
    return <RemoveFromCartComponent id={product_id} />;
  }

  return <AddToCartComponent id={product_id} {...props} />;

  // const store = React.useContext(Context);
  // const removeFromCart = async e => {
  //   e.preventDefault();
  //   if (!store.state.user) {
  //     this.props.history.push("/signin");
  //   }
  //   let response = await request("/api/users/cart", "DELETE", {
  //     product_id: e.target.id
  //   });
  //   if (response.errors.length === 0) {
  //     store.callReducer({ type: "UPDATE_USER", data: response.data });
  //   }
  // };
  // if (store.state.user) {
  //   const found = store.state.user.cart.find(element => element.id == props.id);
  //   if (found) {
  //     return (
  //       <React.Fragment>
  //         <a id={props.id} onClick={removeFromCart}>
  //           REMOVE FROM CART
  //         </a>
  // <Link to="/user/shop/cart.html" className="waves-effect">
  //   View Cart
  // </Link>
  //       </React.Fragment>
  //     );
  //   }
  // }
  // const addToCart = async e => {
  //   e.preventDefault();
  //   if (!store.state.user) {
  //     props.history.push("/signin");
  //   }
  //   let response = await request("/api/users/cart", "POST", {
  //     product_id: e.target.id
  //   });
  //   if (response.errors.length === 0) {
  //     store.callReducer({ type: "UPDATE_USER", data: response.data });
  //   }
  // };
  // return (
  //   <React.Fragment>
  // <a id={props.id} onClick={addToCart}>
  //   ADD TO CART
  // </a>
  //   </React.Fragment>
  // );
}

export default CartButtonComponent;
