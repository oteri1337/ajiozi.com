import "./assets/app.js";
import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { reducer, Provider, Routes, request, registerWorker } from "./Routes";

async function renderApp() {
  const initState = {
    products: [],
    user: false,
    admin: false,
    cartIsReady: false
  };

  let persisted;
  let backend;
  let appState;

  persisted = await JSON.parse(localStorage.getItem("state"));
  appState = reducer(initState, { type: "UPDATE_STATE", data: persisted });

  backend = await request("/api/users/auth/status");
  appState = reducer(appState, { type: "UPDATE_USER", data: backend.data });

  backend = await request("/api/admins/auth/status");
  appState = reducer(appState, { type: "UPDATE_ADMIN", data: backend.data });

  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    hydrate(
      <Provider appState={appState}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>,
      rootElement
    );
  } else {
    render(
      <Provider appState={appState}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>,
      rootElement
    );
  }
}

renderApp();
registerWorker();
