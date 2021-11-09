import logo from './logo.svg';
import './App.css';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MsalAuthenticationTemplate
          interactionType={InteractionType.Popup}
          authenticationRequest={{scopes: ["openid", "profile"]}}
          errorComponent={error => (<p>An Error Occured: {error}</p>)}
          loadingComponent={() => (<p>Authentication in progress...</p>)}
          >
          <p>At least one user is signed in!</p>
        </MsalAuthenticationTemplate>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;