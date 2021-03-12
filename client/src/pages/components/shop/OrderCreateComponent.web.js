import React from "react";
import { useStoreRequest } from "../../../Routes.web";
import UtilFormComponent from "../utilities/UtilFormComponent";

function ProductOrderPlaceComponent(props) {
  const { state, onDone, store } = useStoreRequest(
    "/api/users/orders",
    "POST",
    "UPDATE_USER"
  );
  const user = store.state.user;

  const initialState = {
    cart: user.cart,
    payment_method: 1,
    recipient_name: user.first_name + " " + user.last_name,
    recipient_email: user.email,
    recipient_phone_number: user.phone_number,
    delivery_address: `${user.address}, ${user.city}, ${user.post_code}, ${
      user.state
    }, ${user.country}.`
  };

  const formArray = [
    {
      id: "recipient_name"
    },
    {
      id: "recipient_email"
    },
    {
      id: "recipient_phone_number"
    },
    {
      id: "delivery_address"
    },
    {
      id: "payment_method",
      type: "select",
      options: [
        {
          value: 1,
          label: "Online Payment"
        },
        {
          value: 2,
          label: "Pay on Delivery"
        }
      ]
    }
  ];

  const onSubmit = async body => {
    const response = await onDone(body);

    if (response.errors.length === 0) {
      props.history.push(`/user/shop/orders/${response.id}`);
    }
  };

  return (
    <React.Fragment>
      <h2 className="h4">Place Order</h2>
      <UtilFormComponent
        formArray={formArray}
        initialState={initialState}
        onSubmit={onSubmit}
        fetching={state.fetching}
        errors={state.response.errors}
        message={state.response.message}
      />
    </React.Fragment>
  );
}

export default ProductOrderPlaceComponent;
