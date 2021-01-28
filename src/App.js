import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Sign from './Component/SignIn';
import ForgotPage from './Component/Forgot';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Sign" exact component = {Sign}/>
          <Route path="/Forgot" exact component = {ForgotPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
