import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React ,{ useState } from 'react';
import Sign from './Pages/Login/SignIn';
import ForgotPage from './Pages/Forget/Forgot';
import CreatePage from './Pages/Register/Account';
import Drawer from './Components/SimpleDrawer';
import Board from './Components/Dashboard';
import Note from './Components/Note';
import CreateNote from './Components/CreateNote';



const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Sign" exact component = {Sign}/>
          <Route path="/Forgot" exact component = {ForgotPage}/>
          <Route path="/CreateAcc" exact component = {CreatePage}/>
          <Route path="/Note" exact component = {Note}/>
          <Route path="/Drawer" exact component = {Drawer}/>
          <Route path="/Dashboard" exact component = {Board}/>
          <Route path="/CreateNote" exact component = {CreateNote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
