import React, { Component } from 'react';
import './App.css';
import Hello from './components/HelloComponent';
import About from './components/AboutComponent';
import Books from './components/BookComponent';
import Home from  './components/Home';
import Admin from  './components/Admin';
import PrivateRoute from "./components/PrivateRoute.js"
import LogIn from "./components/LogIn"
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
class App extends Component {


  render() {
    return (
    <Router>
      <div className="App">
          <div className="container">
                   <ul>
                     <li><Link to="/hello">Hello</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/books">Books</Link></li>
                     <li><Link to="/admin">Admin</Link></li>
                  </ul>
                    <hr/>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/hello" component={Hello} />
            <Route path="/books" component={Books} />
            <Route path="/login" component={LogIn}/>
            <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
          </Switch>
          </div>
      </div>
    </Router>
    );
  }
}
export default App;
