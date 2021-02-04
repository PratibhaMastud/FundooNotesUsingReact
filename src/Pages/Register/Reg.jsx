import React from "react";
import { Typography, Link, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import './Register.css';
import { withRouter } from 'react-router-dom';
import Logo from '../../Accets/funlogo.png';


    const styles = theme => ({  
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    
    textField: {
        marginTop: theme.spacing(6),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '30ch',
      marginTop: theme.spacing(2),
      height: '5ch'
    },
    textFieldsec: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: '62ch',
        height:'5ch',
        
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
        width: '30ch',
        height: '5ch'
      },
      loginBtn: {
       marginLeft: theme.spacing(20),
        },
  });

  class Reg extends React.Component {

    constructor() {
        super();
        this.state = {

            fields: {},
            errors: {email:'' ,password:''}
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
        <div >
        <form onSubmit={this.submitLoginForm} >
        <div className="register-form">
            <div className="logo">
                <img src={Logo} alt="boohoo" className="img-responsive"/>
            </div>
            <div className="trypto">
                <Typography variant="h7">
                    Create your Fundoo Account
                </Typography>
            </div>
            <div className="text">
            <TextField
            label="Firstname"
            id="outlined-size-small"
            variant="outlined"
            name="firstName"
            size="small"
            value={this.state.fields.firstName}
            onChange={this.handleChange}
            className={classes.textField}
            />
    
            <TextField
            label="Lastname"
            id="outlined-size-small"
            variant="outlined"
            name="lastName"
            size="small"
            value={this.state.fields.lastName}
            onChange={this.handleChange}
            className={classes.textField}
            />
            </div>
            <div className="text-field">
            <TextField
            type="username"
            label="Username"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="email"
            value={this.state.fields.email}
            onChange={this.handleChange}
            className={classes.textFieldsec}
            />
            </div>
            <div className="text">
            <TextField
            type="password"
            label="Password"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="password"
            value={this.state.fields.password}
            onChange={this.handleChange}
            className={classes.textField}
            />
            <TextField
            type="password"
            label="Confirm"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="confirmPassword"
            value={this.state.fields.confirmPassword}
            onChange={this.handleChange}
            className={classes.textField}
            />
            </div> 
            <div className="link-button">
            <Link variant="body2" className={classes.linkButton}>
                Sign in instead..
            </Link>
            
            <Button
            variant="contained"
            size="medium"
            color="primary"
            type="submit"
            className={classes.loginBtn}
            >
            Next
            </Button>
            </div>
            
        </div>    
     </form>
     </div>
    );
    }
}
export default withRouter(withStyles(styles)(Reg));
//this export connects the component to the reduxStore as well as allowing us to use the history props
