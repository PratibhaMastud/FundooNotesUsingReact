import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Sign from './Component/SignIn';
import ForgotPage from './Component/Forgot';
import CreatePage from './Component/Account';
import Drawer from './Component/SimpleDrawer';
//import Create from './Component/NewAcc';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Sign" exact component = {Sign}/>
          <Route path="/Forgot" exact component = {ForgotPage}/>
          <Route path="/CreateAcc" exact component = {CreatePage}/>
        </Switch>
      </Router>
      <Drawer/>
    </div>
  );
}

export default App;
