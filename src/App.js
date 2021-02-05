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
import Drawer from './Components/DrawerFiles/SimpleDrawer';
import Board from './Components/Home/Dashboard.jsx';
import Note from './Components/NoteFiles/Note';
import CreateNote from './Components/NoteFiles/CreateNote';
import Reg from './Pages/Register/Reg';
import Reset from './Pages/Reset/Resett';

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Sign" exact component = {Sign}/>
          <Route path="/Login" exact component = {Login}/>
          <Route path="/Forgot" exact component = {ForgotPage}/>
          <Route path="/Note" exact component = {Note}/>
          <Route path="/Drawer" exact component = {Drawer}/>
          <Route path="/Dashboard" exact component = {Board}/>
          <Route path="/CreateNote" exact component = {CreateNote} />
          <Route path="/Reg" exact component = {Reg}/>
          <Route path="/Reset" exact component = {Reset}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
