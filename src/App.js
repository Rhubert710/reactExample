import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <MyInfoComponent />
      </header>
    </div>
  );
}

function MyInfoComponent() {
  const myName = "Robert";
  const current_year = 2022

  const course = 'web dev'
  return (
    <div>
      <h1>{myName}</h1>
      <p>graduating: {current_year +1}</p>
      <p>course: {course}</p>
    </div>
  );
}

export default App;
