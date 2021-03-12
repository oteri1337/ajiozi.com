import React from "react";
import { Switch, Route } from "react-router-dom";

import UserRoute from "./pages/components/routes/UserRouteComponent";
import GuestRoute from "./pages/components/routes/GuestRouteComponent";

// Cms
import HomePage from "./pages/tour/HomePage";
import ErrorPage from "./pages/tour/ErrorPage";
import ContactPage from "./pages/tour/ContactPage";
import ResourcesPage from "./pages/tour/ResourcesPage";
import ServicesPage from "./pages/tour/ServicesPage";
import ProductListPage from "./pages/tour/products/ProductListPage";

import CareersPage from "./pages/tour/resources/CareersPage";
import ValuesPage from "./pages/tour/resources/ValuesPage";
import MissionPage from "./pages/tour/resources/MissionPage";
import CompanyPage from "./pages/tour/resources/CompanyPage";
import LeadershipPage from "./pages/tour/resources/LeadershipPage";

import IotPage from "./pages/tour/services/IotPage";
import CctvPage from "./pages/tour/services/CctvPage";
import ManufacturePage from "./pages/tour/services/ManufacturePage";
import SoftwarePage from "./pages/tour/services/SoftwarePage";

//  User
import SignInPage from "./pages/user/auth/SignInPage";
import SignUpPage from "./pages/user/auth/SignUpPage";
import PasswordResetPage from "./pages/user/auth/PasswordResetPage";
import AccountPage from "./pages/user/auth/AccountPage";
// import EmailVerificationPage from "./pages/user/auth/EmailVerificationPage";

// User Shop
import CartPage from "./pages/user/shop/CartPage";
import OrderReadPage from "./pages/user/shop/OrderReadPage";

//import UserSignUpPage from "./pages/user/signup";
// import UserHomePage from "./pages/user/UserHomePage";
// import UserSignOut from "./pages/user/signout";

//import Product from "./pages/shop/read";

// Orders

// import OrdersPage from "./pages/shop/orders";
// import Category from "./pages/shop/categories/read";
// import CategoryList from "./pages/shop/categories/list";

// Admin
// import AdminIndex from "./pages/admin/index";
// import AdminSignin from "./pages/admin/signin";
// import AdminSignout from "./pages/admin/signout";

// Admin Product
// import AdminProductCreate from "./pages/admin/products/create";
// import ProductUpdate from "./pages/admin/products/update";
// import ProductDelete from "./pages/admin/products/delete";
// import AdminProductList from "./pages/admin/products/list";
// import AdminProductIndex from "./pages/admin/products/index";

// // Admin Category
// import CategoryCreate from "./pages/admin/categories/create";
// import CategoryUpdate from "./pages/admin/categories/update";
// import CategoryDelete from "./pages/admin/categories/delete";
// import AdminCategoryList from "./pages/admin/categories/list";
// import AdminCategoryIndex from "./pages/admin/categories/index";

// // Admin Orders
// import AdminOrders from "./pages/admin/orders/index";
// import AdminOrderUpdate from "./pages/admin/orders/update";

export const Routes = () => {
  // prettier-ignore
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact.html" component={ContactPage} />
      <Route exact path="/resources.html" component={ResourcesPage} />
      <Route exact path="/services.html" component={ServicesPage} /> 
      <Route exact path="/products/list.html" component={ProductListPage} />

      <Route exact path="/services/iot.html" component={IotPage} />
      <Route exact path="/services/cctv.html" component={CctvPage} />
      <Route exact path="/services/manufacture.html" component={ManufacturePage}/>
      <Route exact path="/services/software.html" component={SoftwarePage} />

      <Route exact path="/resources/careers.html" component={CareersPage} />
      <Route exact path="/resources/values.html" component={ValuesPage} />
      <Route exact path="/resources/mission.html" component={MissionPage} />
      <Route exact path="/resources/company.html" component={CompanyPage} />
      <Route exact path="/resources/leadership.html" component={LeadershipPage}/>

      <GuestRoute exact path="/user/auth/signin.html" component={SignInPage} />
      <GuestRoute exact path="/user/auth/signup.html" component={SignUpPage} />
      <GuestRoute exact path="/user/auth/password_reset.html" component={PasswordResetPage} />
      
      <UserRoute exact path="/user/auth/account.html" component={AccountPage} />
      <UserRoute exact path="/user/shop/cart.html" component={CartPage} />
      <UserRoute exact path="/user/shop/orders/:id" component={OrderReadPage} />

      {/* 

      
      
      
      <Route exact path="/user/auth/email_verification.html" component={EmailVerificationPage}/>
 */}

 */}


      {/* <Route exact path="/products/orders" component={ProductOrdersPage} />
       */}
      {/* <Route
        strict
        exact
        path="/user/signin"
        render={() => <UserGuestComponent component={UserSignInPage} />}
      /> */}
      {/* <Route exact path="/products" component={ProductListPage} /> 

      <Route exact path="/signup" component={UserSignUpPage} />

      <Route
        strict
        exact
        path="/user/home"
        render={() => <UserLoggedComponent component={UserHomePage} />}
      />
      <Route
        strict
        exact
        path="/user/cart"
        render={() => <UserLoggedComponent component={UserCartPage} />}
      /> */}
      {/* 
        <Route exact path="/products/categories" component={CategoryList} />

        <Route exact path="/control" component={AdminIndex} />
        <Route exact path="/control/signin" component={AdminSignin} />
        <Route exact path="/control/signout" component={AdminSignout} />

        <Route exact path="/control/products" component={AdminProductIndex} />
        <Route exact path="/control/orders" component={AdminOrders} />
        <Route
          exact
          path="/control/categories"
          component={AdminCategoryIndex}
        />

        <Route
          exact
          path="/control/products/create"
          component={AdminProductCreate}
        />

        <Route
          exact
          path="/control/products/list"
          component={AdminProductList}
        />

        <Route
          exact
          path="/control/categories/list"
          component={AdminCategoryList}
        />

        <Route
          exact
          path="/control/categories/create"
          component={CategoryCreate}
        />

        <Route
          path="/control/products/update/:slug"
          component={ProductUpdate}
        />

        <Route
          path="/control/categories/update/:slug"
          component={CategoryUpdate}
        />

        <Route
          path="/control/orders/update/:slug"
          component={AdminOrderUpdate}
        />

        <Route
          path="/control/products/delete/:slug"
          component={ProductDelete}
        />

        <Route
          path="/control/categories/delete/:slug"
          component={CategoryDelete}
        />

        <Route path="/products/categories/:slug" component={Category} />

        <Route path="/products/:slug" component={Product} /> */}
      <Route component={ErrorPage} />
    </Switch>
  );
};

export const reducer = (state, action) => {
  //console.log(action.type, action.data);

  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        ...action.data
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.data
      };
    case "UPDATE_ADMIN":
      return {
        ...state,
        admin: action.data
      };
    case "UPDATE_PRODUCTS":
      return {
        ...state,
        products: action.data
      };
    case "UPDATE_PRODUCTS_PAGE":
      return {
        ...state,
        products: {
          ...action.data,
          data: [...state.products.data, ...action.data.data]
        }
      };
    case "UPDATE_CART_READY":
      return {
        ...state,
        cartIsReady: action.data
      };
    case "UPDATE_USER_ORDER":
      let orders = state.user.orders;
      let newOrders = orders.map(order => {
        if (order.id === action.data.id) {
          return action.data;
        }
        return order;
      });
      return {
        ...state,
        user: {
          ...state.user,
          orders: newOrders
        }
      };
    default:
      return state;
  }
};

export const Provider = props => {
  const [state, callReducer] = React.useReducer(reducer, props.appState);

  React.useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  });

  return (
    <Context.Provider value={{ state, callReducer }}>
      {props.children}
    </Context.Provider>
  );
};

export const request = async function(
  endpoint,
  type,
  body = false,
  removejson = false
) {
  if (body === false) {
    try {
      let response = await fetch(endpoint, {
        method: type || "GET",
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
      });
      return (response = await response.json());
    } catch (error) {
      let data = {
        errors: ["Network Connection Failed", error],
        data: {}
      };
      return data;
    }
  }

  if (removejson === true) {
    try {
      let response = await fetch(endpoint, {
        method: type || "GET",
        body: body,
        credentials: "include"
      });
      return (response = await response.json());
    } catch (error) {
      return {
        errors: ["Network Connection Failed"],
        data: {}
      };
    }
  }

  try {
    let response = await fetch(endpoint, {
      method: type || "GET",
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "content-type": "application/json"
      }
    });
    return (response = await response.json());
  } catch (error) {
    return {
      errors: ["Network Connection Failed"],
      data: {}
    };
  }
};

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "UPDATE_STATE":
//       return action.data;
//     case "UPDATE_USER":
//       return {
//         ...state,
//         user: action.data
//       };
//     case "UPDATE_CART":
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           cart: action.data
//         }
//       };
//     case "UPDATE_CART_READY":
//       return {
//         ...state,
//         cartIsReady: action.data
//       };
//     case "UPDATE_PRODUCT_IN_CART":
//       let product = state.user.cart[action.data.id];
//       product = { ...product, ...action.data.update };

//       let cart = state.user.cart;
//       cart[action.data.id] = product;

//       return {
//         ...state,
//         user: {
//           ...state.user,
//           cart
//         }
//       };
//     case "UPDATE_ORDERS":
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           cart: [],
//           orders: action.data
//         }
//       };
//     default:
//       return state;
//   }
// };

export const APP_NAME = "Ajiozi";

export const MAIL_NAME = " customerservice@Ajiozi.com";

export const Context = React.createContext({});

// export const request = async function(
//   endpoint,
//   type,
//   body = false,
//   removejson = false
// ) {
//   if (body === false) {
//     try {
//       let response = await fetch(endpoint, {
//         method: type || "GET",
//         credentials: "include",
//         headers: {
//           "content-type": "application/json"
//         }
//       });
//       return (response = await response.json());
//     } catch (error) {
//       let data = {
//         errors: ["Network Connection Failed", error],
//         data: {}
//       };
//       return data;
//     }
//   }

//   if (removejson === true) {
//     try {
//       let response = await fetch(endpoint, {
//         method: type || "GET",
//         body: body,
//         credentials: "include"
//       });
//       return (response = await response.json());
//     } catch (error) {
//       return {
//         errors: ["Network Connection Failed"],
//         data: {}
//       };
//     }
//   }

//   try {
//     let response = await fetch(endpoint, {
//       method: type || "GET",
//       body: JSON.stringify(body),
//       credentials: "include",
//       headers: {
//         "content-type": "application/json"
//       }
//     });
//     return (response = await response.json());
//   } catch (error) {
//     return {
//       errors: ["Network Connection Failed"],
//       data: {}
//     };
//   }
// };

export const useRequest = (endpoint, type) => {
  const initialState = {
    response: {
      errors: [],
      message: "",
      data: {}
    },
    fetching: false
  };

  const [state, setState] = React.useState(initialState);

  const onDone = async (body = false) => {
    setState({ ...initialState, body, fetching: true });
    let response = await request(endpoint, type, body);
    setState({ ...state, fetching: false, response });
  };

  return {
    state,
    onDone
  };
};

export const useStoreRequest = (
  endpoint,
  type,
  dispatch = "NO_UPDATE",
  removejson = false
) => {
  const store = React.useContext(Context);
  const initialState = {
    response: {
      errors: [],
      message: "",
      data: {}
    },
    fetching: false
  };
  const [state, setState] = React.useState(initialState);

  const onDone = async (body = false) => {
    setState({ ...initialState, body, fetching: true });
    let response = await request(endpoint, type, body, removejson);
    setState({ ...state, fetching: false, response });

    if (response.errors.length === 0) {
      store.callReducer({ type: dispatch, data: response.data });
    }

    return response;
  };

  return {
    state,
    onDone,
    store
  };
};

// export const Provider = props => {
//   let initialState = {
//     user: false,
//     cartIsReady: false
//   };

//   let [state, callReducer] = React.useReducer(
//     reducer,
//     props.store || initialState
//   );

//   React.useEffect(() => {
//     localStorage.setItem("state", JSON.stringify(state));
//   }, [state]);

//   return (
//     <Context.Provider value={{ state, callReducer }}>
//       {props.children}
//     </Context.Provider>
//   );
// };

export const signOut = (event, store) => {
  event.preventDefault();
  store.callReducer({ type: "UPDATE_USER", data: false });
  request("/api/users/auth/signout");
};

export const registerWorker = async () => {
  if (!navigator.serviceWorker) {
    console.log("service worker not supported");
    return;
  }

  try {
    await navigator.serviceWorker.register("/service-worker.js", {
      scope: "/"
    });
    console.log("service worker registration successful");
  } catch (error) {
    console.log("service worker registration failed", error);
  }

  window.addEventListener("beforeinstallprompt", e => {
    e.prompt();
    console.log("app install prompted");
  });
};
