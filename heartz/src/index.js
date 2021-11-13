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
    // Client ID of the Azure AD B2C app
    clientId: "acedc7e2-f4d4-49cd-93d9-d7976d987739"
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