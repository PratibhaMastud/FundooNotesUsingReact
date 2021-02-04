import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React  from 'react';
import Sign from './Pages/Login/SignIn';
import Login from './Pages/Login/Login';
import ForgotPage from './Pages/Forget/Forgot';
import CreatePage from './Pages/Register/Account';
import Drawer from './Components/DrawerFiles/SimpleDrawer';
import Board from './Components/Home/Dashboard.jsx';
import Note from './Components/NoteFiles/Note';
import CreateNote from './Components/NoteFiles/CreateNote';
import Reg from './Pages/Register/Reg';

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Sign" exact component = {Sign}/>
          <Route path="/Login" exact component = {Login}/>
          <Route path="/Forgot" exact component = {ForgotPage}/>
          <Route path="/CreateAcc" exact component = {CreatePage}/>
          <Route path="/Note" exact component = {Note}/>
          <Route path="/Drawer" exact component = {Drawer}/>
          <Route path="/Dashboard" exact component = {Board}/>
          <Route path="/CreateNote" exact component = {CreateNote} />
          <Route path="/Reg" exact component = {Reg}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
