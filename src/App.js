import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route 
} from 'react-router-dom'
import Home from './Components/Home'
import Shoes from './Components/Shoes'
import Launch from './Components/Launch'

import './App.css';

function App() {
  

  return (
    <div className="App">  
      <Router>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shoes">Shoes</Link></li>
        </ul>
        <div className="content">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shoes" component={Shoes} />
              <Route path="/shoes/:id" component={Launch} />
              <Route path="*" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
