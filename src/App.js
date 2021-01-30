import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import Sign from './Pages/Login/SignIn';
import ForgotPage from './Pages/Forget/Forgot';
import CreatePage from './Pages/Register/Account';
import Drawer from './Components/SimpleDrawer';
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
