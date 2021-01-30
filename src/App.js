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
import Board from './Components/Dashboard';
import Note from './Components/CreateNote';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Sign" exact component = {Sign}/>
          <Route path="/Forgot" exact component = {ForgotPage}/>
          <Route path="/CreateAcc" exact component = {CreatePage}/>
          <Route path="/Note" exact component = {Note}/>
          <Route path="/Dashboard" exact component = {Board}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
