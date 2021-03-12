import React from "react";
import { Context, request } from "../../../Routes";
import ContainerComponent from "../../components/tour/TourContainerComponent";
import ProductCartCostComponent from "../../components/shop/ProductCartCostComponent";

function ProductCartPage(props) {
  const store = React.useContext(Context);
  const user = store.state.user;
  let cart = user.cart || [];

  const cartIsNotReady = () => {
    store.callReducer({ type: "UPDATE_CART_READY", data: false });
  };

  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: `${user.first_name} ${user.last_name}`,
      link: "/user/auth/account.html"
    },
    {
      label: "Cart"
    }
  ];

  if (!Object.keys(cart).length) {
    return (
      <ContainerComponent bread={nav}>
        <div className="card-panel">No Products In Cart</div>
      </ContainerComponent>
    );
  }

  let products = Object.keys(cart);

  const requestRemoveFromCart = async e => {
    e.preventDefault();

    cartIsNotReady();

    try {
      let response = await request(`/api/carts`, "DELETE", {
        product_id: e.target.id
      });

      if (response.errors.length === 0) {
        store.callReducer({ type: "UPDATE_USER", data: response.data });
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };

  const onChangeQuantity = event => {
    const newCart = user.cart.map(product => {
      if (product.id == event.target.id) {
        return {
          ...product,
          quantity: event.target.value
        };
      }
      return product;
    });

    const newUser = {
      ...user,
      cart: newCart
    };

    store.callReducer({ type: "UPDATE_USER", data: newUser });
    cartIsNotReady();
  };

  const renderImageOne = row => {
    let image_one = "";

    if (row.image_one !== "") {
      image_one = (
        <img src={row.image_one} alt={row.title} style={{ width: "15rem" }} />
      );
    } else {
      image_one = (
        <img src="/images/products/default.png" alt="Default Image" />
      );
    }

    return image_one;
  };

  const renderCartUpdate = () => {
    return user.cart.map(row => {
      return (
        <React.Fragment key={row.id}>
          <div className="row">
            <div className="col l4 m12 s12">{renderImageOne(row)}</div>
            <div className="col l2 m12 s12">
              <div className="row">
                <div className=" hide-on-large-only">
                  <b>Product</b>
                </div>
                <div className="">{row.title}</div>
              </div>
            </div>
            <div className="col l2 m12 s12">
              <div className="row">
                <div className=" hide-on-large-only">
                  <b>Price (NGN)</b>
                </div>
                <div className="">
                  <s>N</s>
                  {row.price_string}
                </div>
              </div>
            </div>
            <div className="col l2 m12 s12">
              <div className="row">
                <div className=" hide-on-large-only">
                  <b>Quantity</b>
                </div>
                <div className="">
                  <input
                    id={row.id}
                    type="number"
                    min="1"
                    value={row.quantity}
                    onChange={onChangeQuantity}
                  />
                </div>
              </div>
            </div>
            <div className="col l2 m12 s12 ">
              <div className="row">
                <div className=" hide-on-large-only">
                  <b>Action</b>
                </div>
                <button
                  id={row.id}
                  onClick={requestRemoveFromCart}
                  className="white btn red-text"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <ContainerComponent bread={nav}>
      <div className="card-panel">
        <div className="center">
          <h4 className="">Cart</h4>
          <br />
          <br />
          <div className="row">
            <div className="col l2 offset-l4 ">
              <b>Product</b>
            </div>
            <div className="col l2 ">
              <b>Price (NGN)</b>
            </div>
            <div className="col l2 ">
              <b>Quantity</b>
            </div>
            <div className="col l2 ">
              <b>Action</b>
            </div>
          </div>
          <div className="row">{renderCartUpdate()}</div>
        </div>
        <ProductCartCostComponent {...props} />
      </div>
    </ContainerComponent>
  );
}

export default ProductCartPage;
