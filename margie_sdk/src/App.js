import logo from './logo.svg';
import './App.css';
import {UsercentricsCmp} from "./components/UsercentricsCmp/UsercentricsCmp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <UsercentricsCmp settingsId={'lGqePJA75'}/>
      </header>
    </div>
  );
}

export default App;
