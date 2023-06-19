// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Hello>
        <h3>This is React component's children</h3>
        <h2>This is React component's children</h2>
      </Hello>
      <Hello name="Ismail" /> you need to put SLASH before closing tag

    </div >
  );
}

export default App;
