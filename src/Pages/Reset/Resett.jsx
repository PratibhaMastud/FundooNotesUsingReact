import React from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Resett.css";
import { withRouter } from "react-router-dom";
import Loog from "../../Accets/fundologo.png";
import userServices from "../../Services/UserService";

const styles = (theme) => ({
  roottt: {
    display: "flex",
    flexWrap: "wrap",
  },
  textFieldss: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: "50ch",
    marginTop: theme.spacing(1),
    height: "10ch",
  },
  linkButton: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(1),
    fontWeight: "bold",
  },
  // loginBtnnn: {
  //   marginLeft: theme.spacing(22),
  //   backgroundColor: "#1a73e8",
  //   ,
  // },
  btnstyle: {
    //marginLeft: theme.spacing(22),
    backgroundColor: "#1a73e8",
    color: "#fff",
    marginRight: theme.spacing(2),
  },
});

class Resett extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }
  handleLogin = () => {
    this.props.history.push("/login");
  };
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
    if (this.validationForm()) {
    }
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
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "* Please enter secure password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  };

  submitLoginForm = (e) => {
    e.preventDefault();
    if (this.validationForm()) {
      let userReset = {
        email: this.state.fields.email,
        password: this.state.fields.password,
      };
      userServices.reset(userReset).then((response) => {
        console.log(response);
        this.props.history.push("/login");
        console.log(response.data);
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit={this.submitLoginForm}>
          <div id="reset">
            <div id="reset-logo">
              <img src={Loog} alt="booh" className="img" />
            </div>
            <div id="reset-in">
              <Typography variant="h5">What's your name?</Typography>
            </div>
            <div id="reset-heading">
              <Typography variant="h8">
                Enter the name on Google Account
              </Typography>
            </div>

            <div className={classes.roottt}>
              <TextField
                label="Username"
                id="outlined-basic"
                className={classes.textFieldss}
                variant="outlined"
                name="email"
                value={this.state.fields.email}
                onChange={this.handleChange}
                helperText={this.state.errors.email}
                error={this.state.errors.email}
              />
            </div>
            <div className={classes.roottt}>
              <TextField
                label="password"
                id="outlined-basic"
                className={classes.textFieldss}
                variant="outlined"
                name="password"
                value={this.state.fields.password}
                onChange={this.handleChange}
                helperText={this.state.errors.password}
                error={this.state.errors.password}
              />
            </div>
            <div className="button">
              <Button
                variant="contained"
                size="medium"
                type="submit"
                className={classes.btnstyle}
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
export default withRouter(withStyles(styles)(Resett));
