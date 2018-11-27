import React, { Component } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import Note from  './components/Note';
import Home from  './components/Home';
import FbAuth from './components/FbAuth';
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
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/new">New Note</Link></li>
                     <li><Link to="/notes">Home</Link></li>
                     <li><Link to="/auth">fb</Link></li>
                  </ul>
                    <hr/>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path ="/notes" component={Note} />
            <Route path="/new" component={FormComponent} />
            <Route path="/auth" component={FbAuth}/>
          </Switch>
          </div>
      </div>
    </Router>
    );
  }
}
export default App;
