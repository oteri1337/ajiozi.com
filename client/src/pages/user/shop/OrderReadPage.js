import React from "react";
import { Link } from "react-router-dom";
import { useStoreRequest } from "../../../Routes";
import ContainerComponent from "../../components/tour/TourContainerComponent";
import { request } from "../../../Routes.web";

function OrderReadPage(props) {
  const id = props.match.params.id;
  const { state, onDone, store } = useStoreRequest(
    `/api/orders/${id}`,
    `GET`,
    `UPDATE_USER_ORDER`
  );

  React.useEffect(() => {
    onDone(false);
  }, []);

  const user = store.state.user;
  const data = user.orders.find(element => element.id == id);

  let label = "Completed Orders";
  let link = "/user/shop/orders/completed.html";

  if (data.delivery_status == "Pending") {
    label = "Pending Orders";
    link = "/user/shop/orders/pending.html";
  }

  if (data.delivery_status == "Cancelled") {
    label = "Cancelled Orders";
    link = "/user/shop/orders/cancelled.html";
  }

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
      label: label,
      link: link
    },
    {
      label: data.id
    }
  ];

  const renderPayButton = () => {
    if (data.payment_status != "Paid") {
      return (
        <button type="button" className="btn" onClick={payWithRave}>
          Pay Now
        </button>
      );
    }
  };

  const renderRow = () => {
    let keys = Object.keys(data);
    let allowedKeys = keys.filter(key => {
      if (key != "products") {
        return true;
      }
      return false;
    });
    return allowedKeys.map(key => {
      return (
        <tr key={key}>
          <td style={{ textTransform: "uppercase" }}>
            {key.replace(/_/g, " ")}
          </td>
          <td>{data[key]}</td>
        </tr>
      );
    });
  };

  const renderProducts = () => {
    const products = data.products || [];
    const productsJsxArray = products.map(product => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.pivot.quantity}</td>
          <td>{product.pivot.price}</td>
        </tr>
      );
    });
    return productsJsxArray;
  };

  // const API_publicKey = "FLWPUBK-3d86e3e30a7850a1d272f9597dd543a1-X";

  const API_publicKey = "FLWPUBK-3d86e3e30a7850a1d272f9597dd543a1-X";

  function payWithRave() {
    var x = getpaidSetup({
      PBFPubKey: API_publicKey,
      customer_email: data.recipient_email,
      amount: data.total,
      customer_phone: data.phone_number,
      currency: "NGN",
      txref: data.id,
      onclose: function() {},
      callback: async function(response) {
        var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.
        console.log("This is the response returned after a charge", response);
        if (
          response.tx.chargeResponseCode == "00" ||
          response.tx.chargeResponseCode == "0"
        ) {
          // redirect to a success page
          const response = await request("/api/orders/pay", "PATCH", {
            id: data.id,
            txref
          });

          if (response.errors.length === 0) {
            store.callReducer({
              type: "UPDATE_USER_ORDER",
              data: response.data
            });
            alert("Payment Verification Successful");
          }
        } else {
          alert("Payment Failed");
          // redirect to a failure page.
        }

        x.close(); // use this to close the modal immediately after payment.
      }
    });
  }

  return (
    <ContainerComponent bread={nav}>
      <div className="card-panel">
        <h1 className="h4">Order Info</h1>
        <table className="striped">
          <tbody>{renderRow()}</tbody>
        </table>
        <br />
        <br />
        <h1 className="h4 app-my-0">Products</h1>
        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Qunatity</th>
              <th>
                Price (<s>N</s>)
              </th>
            </tr>
          </thead>

          <tbody>{renderProducts()}</tbody>
        </table>

        <br />

        <form>
          <center>
            {renderPayButton()}

            <br />
          </center>
        </form>
      </div>
    </ContainerComponent>
  );
}

export default OrderReadPage;
