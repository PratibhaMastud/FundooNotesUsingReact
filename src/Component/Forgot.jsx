import React from "react";
import { Button, TextField, Grid, Paper, Typography, Link} from "@material-ui/core";
import './SignIn.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Forgot extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:''
    }
  }

  changeHandlerEmail = (e) => {
    this.setState({ userName: e.target.value })
    this.state.email = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    let userData = {
      "email":this.state.email
    }
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/reset",userData)
    .then(response => {
      console.log(response);
      console.log(response.data);
    })
  }

  render() {
    return (
    <div>
  <Grid container spacing={0} justify="center" direction="row">      
      <Grid item>
        <Grid container direction="column"  justify="center" spacing={2} className="login-form">
        <Paper variant="elevation" elevation={2} className="login-background">
        <Grid item>
          <Typography component="h1" variant="h7" className="text">
            Fundoo
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h5" variant="h6" spacing={2}>
           Account recovery
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
    name="userName"      
    value={this.state.userName}
    onChange={this.changeHandlerEmail}
    />
    </Grid>
    <Grid item className="link">
    <Link href="#" variant="body2">
    Cancel
    </Link>
    </Grid>
    <Grid item >
    <Button
    variant="contained"
    size="small"
    color="secondary"
    type="submit"
    className="button-block"
    >
    Submit
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
    export default withRouter(Forgot);