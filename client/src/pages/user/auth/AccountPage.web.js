import React from "react";
import { Link } from "react-router-dom";
import ContainerComponent from "../../components/tour/TourContainerComponent";

function UserAccountComponent() {
  const nav = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "My Account"
    }
  ];

  return (
    <ContainerComponent bread={nav}>
      <div className="row app-py-0">
        <div>
          <div className="card-panel">
            <h1 className="h4">My Account</h1>
            <ul className="collection">
              <li className="collection-item">
                <span className="material-icons notranslate">
                  account_circle
                </span>
                <Link to="/user/account/profile">View Profile</Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">
                  shopping_cart
                </span>
                <Link to="/user/shop/cart.html">Shopping Cart</Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">
                  local_shipping
                </span>
                <Link to="/user/shop/orders/pending.html">Pending Orders</Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">
                  local_shipping
                </span>
                <Link to="/user/shop/orders/completed.html">
                  Completed Orders
                </Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">
                  local_shipping
                </span>
                <Link to="/user/shop/orders/cancelled.html">
                  Cancelled Orders
                </Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">
                  insert_emoticon
                </span>
                <Link to="/user/account/update/photo">
                  Update Profile Photo
                </Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">phone</span>
                <Link to="/user/account/update/phone">Update Phone Number</Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">home</span>
                <Link to="/user/account/update/address">Update Address</Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">linear_scale</span>
                <Link to="/user/account/update/password">Update Password</Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">email</span>
                <Link to="/user/account/update/email">Update Email</Link>
              </li>

              <li className="collection-item">
                <span className="material-icons notranslate">settings</span>
                <Link to="/user/account/update/settings">Account Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
}

export default UserAccountComponent;
