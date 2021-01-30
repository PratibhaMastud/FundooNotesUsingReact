import React from "react";
import {TextField,Button,Link,Typography, Grid} from "@material-ui/core";
import './SignIn.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';



class NewAcc extends React.Component {
    constructor(props){
        super(props);
        this.state={
          firstName:'',
          lastName:'',
          email:'',
          password:'',
          confirmPassword:''
        }
      }

      

  render() {
    return (
    <div>        
  <Grid container spacing={10} justify="center" direction="row" className="Gridbackground" > 
    <Grid item justify="center" direction="row" xs={12} className="Create-background">
        </Grid>
        <Grid item justify="center" direction="row" xs={12} sm={6}>
        <form className="formContainer login-background" onSubmit={this.handleSubmit}>
        <Grid item xs={12}>
        <Grid item>
          <Typography component="h1" variant="h7" className="text" >
            Fundoo
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h5" variant="h6">
            Create Fundoo Account
          </Typography>
        </Grid>
        <br></br>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={this.changeHandlerUserName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={this.changeHandlerLasName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.changeHandlerEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={this.changeHandlerPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name=" confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                onChange={this.changeHandlerConfirmPassword}
              />
            </Grid>
        
            <Grid item className="link">
                <Link href="#" variant="body2">
                    SignIn
                </Link>
            </Grid>
            <Button variant="contained" color="secondary" className="block">
            Register
            </Button>


</Grid>
</Grid>
</form>
</Grid>
<Grid item justify="center" direction="row" xs={12}  sm={3}>
</Grid>
</Grid>
</div>

    );
    }
    }
    export default withRouter(NewAcc);