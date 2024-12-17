import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import "@mantine/notifications/styles.css";
import React from "react";

// const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
// const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <React.StrictMode>
  // <Auth0Provider
  //   domain={domain}
  //   clientId={clientId}
  //   authorizationParams={{ redirect_uri: window.location.origin }}
  // >
  // </Auth0Provider>
  // </React.StrictMode>
);
