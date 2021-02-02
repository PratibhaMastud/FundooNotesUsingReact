import React from "react";
import { Typography, Link, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import { withRouter } from 'react-router-dom';
//import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
      width: '50ch',
      marginTop: theme.spacing(2),
      height:'10ch',
    },
    textFieldsec: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: '50ch',
        height:'10ch',
      },
      linkPass: {
          textAlign: "left",
          marginLeft: theme.spacing(2),
          fontWeight: "bold",
      },
      linkButton: {
        textAlign: "left",
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(1),
        fontWeight: "bold",
      },
      loginBtn: {
        marginLeft: theme.spacing(22),
        },
  }));

  function Login() {
    const classes = useStyles();

    return (
        <div>
        <div id="register">
            <div id="logo">
                <h3>Fundoo</h3>
            </div>
            <div id="logo">
                <Typography  variant="h6">
                    Sign in
                </Typography>
            </div>
            <div id="head">
                <Typography variant="h7" >
                    Use Your Fundoo account
                </Typography>
            </div>
            
            <div className={classes.root}>
            <TextField
            label="UserName"
            id="outlined-basic"
            className={classes.textField}
            variant="outlined"
            />
            
            </div>
            <div className={classes.root}>
            <TextField
            label="Password"
            id="outlined-basic"
            className={classes.textFieldsec}
            variant="outlined"
            />
            </div>
            <div className={classes.linkPass}>
            <Link variant="body2">
                Forgot Password?
            </Link>
            </div>
            <div className={classes.linkButton}>
            <Link variant="body2">
                Create New account...
            </Link>
            <Button
            variant="contained"
            size="medium"
            color="primary"
            type="submit"
            className={classes.loginBtn}
            >
            Login
            </Button>
            </div>
       </div>
    </div>
    );
    }
    export default withRouter(Login);