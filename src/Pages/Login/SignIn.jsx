import React,{ useState , useEffect } from "react";
import { Typography, Link, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
//import { connect } from 'react-redux';
//import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import './Login.css';
import { withRouter } from 'react-router-dom';
//import axios from 'axios';

const useStyles = makeStyles((theme) => ({
   // const styles = theme => ({  
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
  })
);

  const SignIn = (props) => {
    const [values, setValues] = useState({
      email:'',
      password:'',
      emailError:'',
      passwordError:'',
      error: false
    });

    const handleChange = event => {
      setValues({...values, [event.target.name] : event.target.value })

    };

    useEffect(() => {
      if(values.email.length > 0){
        validation('email');
      }
    },[values.email]
    )

    useEffect(() => {
      if(values.password.length > 0){
        validation('password');
      }
    },[values.password]
    )

    const validation = name => {
      let error = false;
      switch (name) {
         case 'email' :
          let emailMsg = "";

          let pattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
          if (!pattern.test(values.email)) {
              emailMsg = 'email is invalid'
              error = true;
          }else{
            emailMsg = ''
            error = false;
          }
          setValues()
          return error;
                  
            case 'password':
            let passwordMsg = '';

            let pattern2 = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
            if (!pattern2.test(values.password)) {
              passwordMsg = 'email is invalid'
                error = true;
            }else{
              passwordMsg = ''
              error = false;
            }
            return error;
            
            default:
              return error;
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state);   
      }
    
    const onSubmit = values => console.log(values);
    const classes = useStyles()
    return (
        <div>
        <form onSubmit={handleSubmit}>
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
            label="Username"
            id="outlined-basic"
            className={classes.textField}
            variant="outlined"
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            helperText={values.emailError}
            
            />
            </div>
            <div className={classes.root}>
            <TextField
            label="Password"
            id="outlined-basic"
            className={classes.textFieldsec}
            variant="outlined"
            name="password"
            value={values.password}
            onChange={handleChange}
            helperText={values.passwordError}
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
       </form>
    </div>
    
    );
    }

export default withRouter(SignIn);
