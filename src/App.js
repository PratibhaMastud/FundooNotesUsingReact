import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React  from 'react';
import login from './Pages/Login/Login';
import forgotPage from './Pages/Forget/Forgot';
import drawer from './Components/DrawerFiles/SimpleDrawer';
import board from './Components/Home/Dashboard.jsx';
import note from './Components/NoteFiles/Note';
import createNote from './Components/NoteFiles/CreateNote';
import register from './Pages/Register/Register';
import reset from './Pages/Reset/Resett';
import appbar from './Components/Appbar/Appbar';
import PrivateRoute from './authguard/PrivateRoute';

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component = {login}/>
          <Route path="/login" exact component = {login}/>
          <Route path="/forgot" exact component = {forgotPage}/>
          <Route path="/note" exact component = {note}/>
          <Route path="/drawer" exact component = {drawer}/>
          <Route path="/createNote" exact component = {createNote} />
          <Route path="/register" exact component = {register}/>
          <Route path="/resetpassword/:token" exact component = {reset}/>
          <Route path="/appbar" exact component = {appbar}/>
          <PrivateRoute path="/dashboard" component={board} exact />
        </Switch>
      </Router>
    </div>
    
  );
}


export default App;
