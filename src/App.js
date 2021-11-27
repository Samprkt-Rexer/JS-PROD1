import React from 'react'
import { BrowserRouter as Link,Router, Route, Routes } from 'react-router-dom'
import Cs from './cs';

function App() {
  return (
    <div>
       <Router>
      <div>
        <nav>
          <ul>
            <li>
            
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
          <Route exact path="/" element={<Cs/>}/>
          <Route exact path="/about" element={<Cs/>}/>
         
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
