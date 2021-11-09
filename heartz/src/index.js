import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

// MSAL configuration
const configuration: Configuration = {
  auth: {
    clientId: "dd7cdbdc-1557-4b4f-b1f3-03e0fee9e073"
  }
};

const pca = new PublicClientApplication(configuration);

const AppProvider = () => (
  <MsalProvider instance={pca}>
    <App />
  </MsalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(<AppProvider />, document.getElementById("root"));