import { useState } from 'react'
import Navabr from './components/Navabr';
import Home from './components/Home';
import Proposal from './components/Proposal';
import './App.css'

function App() {
  const title = "Welcome to the new Blog";
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navabr /> */}
      <div className="content">
        {/* <Home /> */}
        <Proposal/>
      </div>
    </div>
  );
}

export default App
