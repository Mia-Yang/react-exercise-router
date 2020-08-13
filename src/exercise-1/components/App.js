import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Products from '../../exercise-2/Products';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/my-profile'>My Profile</Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
          </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/my-profile' component={MyProfile} />
            <Route path='/about-us' component={AboutUs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
