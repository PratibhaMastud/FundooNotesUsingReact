import React from "react";
import { Typography, Link, Button } from "@material-ui/core";
//import { makeStyles } from '@material-ui/core/styles';
//import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import './Login.css';
import { withRouter } from 'react-router-dom';
//import axios from 'axios';

//const useStyles = makeStyles((theme) => ({
    const styles = theme => ({  
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
  });

  class Login extends React.Component {

    constructor() {
        super();
        this.state = {

            fields: {},
            errors: {}
        }
      this.handleChange = this.handleChange.bind(this);
      this.submitLoginForm = this.submitLoginForm.bind(this);
  
    };

    handleChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }


    validationForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }
        
        if (typeof fields["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
              formIsValid = false;
              errors["email"] = "*Please enter valid email-ID.";
            }
          }

        if (!fields["password"]){
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined"){
            if(!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
                formIsValid = false;
                errors["password"] = "* Please enter secure password."
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    submitLoginForm = (e) => {
        e.preventDefault();
        if (this.validationForm()) {
            let fields = {};
            fields["email"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
    }

    render() {
    const { classes } = this.props;
    return (
        <div>
        <form  onSubmit={this.submitLoginForm}>
        <div id="register">
            <div id="logo">
                <h3>Fundoo</h3>
            </div>
            <div id="sign">
                <Typography variant="h6" >
                    SignIn
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
            value={this.state.fields.email}
            onChange={this.handleChange}
            helperText={this.state.errors.email}
            error={this.state.errors.email}
             />
            </div>
            <div className={classes.root}>
            <TextField
            label="Password"
            id="outlined-basic"
            className={classes.textFieldsec}
            variant="outlined"
            name="password"
            value={this.state.fields.password}
            onChange={this.handleChange}
            helperText={this.state.errors.password}
            error={this.state.errors.password}
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
}
//export default withRouter((withStyles(Login)));
//export default connect()(withRouter(Login))(withStyles(styles)(Login));
export default withRouter(withStyles(styles)(Login));
//this export connects the component to the reduxStore as well as allowing us to use the history props
