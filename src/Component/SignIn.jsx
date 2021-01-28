import React from "react";
import { Button, TextField, Grid, Paper, Typography, Link} from "@material-ui/core";
import './SignIn.css';
import { withRouter } from 'react-router-dom';
//import axios from 'axios';


class SignIn extends React.Component {
    constructor(props){
      super(props);
      this.state={
        userName:'',
        password:''
      }
    }

  render() {
    return (
    <div>
    <Grid container spacing={0} justify="center" direction="row">
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
    <form onSubmit={this.handleSubmit}>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          type="email"
          id="outlined-basic"
          label="Username"
          variant="outlined"   
          required
          autoFocus
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
    </form>
    </Grid>
    </Paper>
    </Grid>
    </Grid>
    </Grid>
    </div>
    );
    }
    }
    export default withRouter(SignIn);