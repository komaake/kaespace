/**
 * CONFIG
 * ============================================
 */

//import config, { InitialComponent } from "./infinitymint.client.tailwind"; //comment/uncomment this line and comment/uncomment above line to switch to tailwind
import config, { InitialComponent } from "./infinitymint.client.bootstrap"; //comment/uncomment this line and comment/uncomment above line to switch to bootstrap

/**
 * DO NOT EDIT BELOW THIS LINE
 * ============================================
 */
//import infintymint client stuff
//import react + app
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ClientProviderProvider from "infinitymint-client/dist/src/contexts/clientProvider";
//standard react
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <ClientProviderProvider config={config}>
    <InitialComponent />
  </ClientProviderProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
