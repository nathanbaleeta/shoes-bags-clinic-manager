import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import API from "../common/APIUtils";

const styles = theme => ({});

const expenses = [
  {
    value: "Electricity",
    label: "Electricity"
  },
  {
    value: "Internet",
    label: "Internet"
  },
  {
    value: "Mobile",
    label: "Mobile"
  },
  {
    value: "Travelling",
    label: "Travelling"
  },
  {
    value: "Uncategorized",
    label: "Uncategorized"
  }
];

class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    };
  }

  onChange = e => {
    /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // get our form data out of state
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password
    };

    API.post("users", user)
      .then(response => {
        console.log(response);
        //this.handleClose();
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    });
  };

  render() {
    const { firstname, lastname, username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography component="h1" variant="h4" align="center">
            Create User
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={this.onChange}
                label="Firstname"
                fullWidth
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={this.onChange}
                label="Lastname"
                fullWidth
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="username"
                name="username"
                value={username}
                onChange={this.onChange}
                label="Username"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="password"
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                label="Password"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Save User
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateUser);
