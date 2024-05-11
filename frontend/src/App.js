import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [posts, setPost] = useState([])
  // fetch(('http://example-docker.com/').then(res => {
  //   setPost(res)
  // }))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited!!! <code>src/App.js</code> and save to reload. new
        </p>
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
