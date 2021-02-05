import React from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import './Resett.css';
import { withRouter } from 'react-router-dom';
import Loog from '../../Accets/funlogo.png';

    const styles = theme => ({  
    roottt: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textFieldss: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: '50ch',
        marginTop: theme.spacing(1),
        height:'10ch',
      },
      linkButton: {
        textAlign: "left",
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(1),
        fontWeight: "bold",
      },
      loginBtnnn: {
        marginLeft: theme.spacing(22),
        },
  });

  class Resett extends React.Component {

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

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "*Please enter your First Name.";
          }
    
          if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["firstName"] = "*Please enter alphabet characters only.";
            }
          }
          
          if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your Last Name.";
          }
    
          if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z ]{3,}/)) {
              formIsValid = false;
              errors["lastName"] = "*Please enter alphabet characters only.";
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
            fields["firstName"] = "";
			fields["lastName"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
    }

    render() {
    const { classes } = this.props;
    return (
        <div>
        <form  onSubmit={this.submitLoginForm}>
        <div id="reset">
            <div id="reset-logo">
            <img src={Loog} alt="booh" className="img"/>
            </div>
            <div id="reset-in">
                <Typography variant="h5" >
                    What's your name?
                </Typography>
            </div>
            <div id="reset-heading">
                <Typography variant="h8" >
                    Enter the name on Google Account
                </Typography>
            </div>
            
            <div className={classes.roottt}>
            <TextField
            label="FirstName"
            id="outlined-basic"
            className={classes.textFieldss}
            variant="outlined"
            name="firstName"
            value={this.state.fields.firstName}
            onChange={this.handleChange}
            helperText={this.state.errors.firstName}
            error={this.state.errors.firstName}
            />
            </div>
			<div className={classes.roottt}>
            <TextField
            label="LastName"
            id="outlined-basic"
            className={classes.textFieldss}
            variant="outlined"
            name="lastName"
            value={this.state.fields.lastName}
            onChange={this.handleChange}
            helperText={this.state.errors.lastName}
            error={this.state.errors.lastName}
            />
            </div>
            <div className="buttton">
                <div className="btnn2"></div>
            <div className="btnn3">
            <Button
            variant="contained"
            color="primary"
            size="medium"
            type="submit"
            className={classes.loginBtnnn}
            >
            Next
            </Button>
            </div>
            </div>
       
       </div>
       </form>
    </div>
    
    );
    }
}
export default withRouter(withStyles(styles)(Resett));