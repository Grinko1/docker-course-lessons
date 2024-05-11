import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [posts, setPost] = useState([])

  const fetchPosts = async () => {
    console.log("fetching");
    const res = await axios.get("api/posts")
    console.log(res);
    setPost(res.data)
  }
  console.log(posts);
  // useEffect(() => {
  //   fetchExample()
  // }, []

  // )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchPosts}>Fetch Posts</button>
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
