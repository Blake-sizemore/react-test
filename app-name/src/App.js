import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look ma, only file saving, no reloading src files!
        </p>
        <ul>
        <li> <strong>create-react-app:</strong> react library that powers the below  tools and more.</li>
        <li> <strong>Bable:</strong> transpiler utility, write modern JavaScript code |ES6, ES7, and beyond!| that will be transpiled into JavaScript for older browsers</li>
        <li> <strong>Web Pack:</strong>packager/bundler, builds proper import/export separate files and parts</li>
        <li> <strong>Entry point:</strong> index.js - thats where react start found in src folder</li>
        </ul>
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
