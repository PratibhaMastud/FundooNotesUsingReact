import React from "react";
import { Button, TextField, Grid, Paper, Typography, Link} from "@material-ui/core";
import './Login.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class SignIn extends React.Component {
    constructor(props){
      super(props);
      this.state={
        email:'',
        password:''
      }
    }
    
    changeHandlerUserName = (e) => {
      this.setState({ 
        email: e.target.value
       })
      this.state.email = e.target.value;
    };

    changeHandlerPassword = (e) => {
      this.setState({ password: e.target.value })
      this.state.password = e.target.value;
    };

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state);
      let userData = {
        "email": this.state.email,
        "password": this.state.password
      }
      axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",userData)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
    }

  render() {
    return (
  <Grid container spacing={0} justify="center" display="flex" direction="row">
    <form onSubmit={this.handleSubmit}>
    <div>
      <Grid item>
        <Grid container direction="column"  justify="center" spacing={2} className="login-form">
        <Paper variant="elevation" elevation={2} className="login-background">
        <Grid item>
          <Typography component="h1" variant="h6" className="text">
            Fundoo
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h4" variant="h6">
            Sign in
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h5" variant="h6" spacing={2}>
            Use Your Fundoo account
          </Typography>
        </Grid>
    <Grid item>
        <br></br>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          type="email"
          id="outlined-basic"
          label="UserName"
          variant="outlined" 
          required
          autoFocus
          value={this.state.email}
          onChange={this.changeHandlerUserName}
        />
      </Grid>
    <Grid item>
    <TextField
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        required
        autoFocus 
        value={this.state.password}
        onChange={this.changeHandlerPassword}
      />
    </Grid>
    <Grid item className="link">
    <Link variant="body2">
    Forgot Password?
    </Link>
    </Grid>
    <Grid item className="link">
    <Link href="#" variant="body2">
    Create New account
    </Link>
    </Grid>
    <Grid item>
    <Button
    variant="contained"
    size="small"
    color="secondary"
    type="submit"
    className="button-block"
    >
    Login
    </Button>
    </Grid>
    </Grid>
    </Grid>
    </Paper>
    </Grid>
    </Grid>
    </div>
    </form>
    </Grid>
    );
    }
    }
    export default withRouter(SignIn);