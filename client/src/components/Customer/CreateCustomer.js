import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import InputMask from "react-input-mask";

import API from "../common/APIUtils";

const styles = theme => ({});

const services = [
  {
    value: "Belt Buckles/ Holes",
    label: "Belt Buckles/ Holes"
  },
  {
    value: "Carpeting/ Padding",
    label: "Carpeting/ Padding"
  },
  {
    value: "Cleaning Bags/ Shoes",
    label: "Cleaning Bags/ Shoes"
  },
  {
    value: "Dyeing",
    label: "Dyeing"
  }
];

class CreateCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      pickUpDate: "",
      receivedBy: "",
      servicesOffered: "",
      craftsman: "",
      totalAmount: ""
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
    const customer = {
      name: this.state.name,
      phone: this.state.phone,
      pickUpDate: this.state.pickUpDate,
      receivedBy: this.state.receivedBy,
      servicesOffered: this.state.servicesOffered,
      craftsman: this.state.craftsman,
      totalAmount: this.state.totalAmount
    };

    API.post("customers", customer)
      .then(response => {
        console.log(response);
        this.handleClose();
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      name: "",
      phone: "",
      pickUpDate: "",
      receivedBy: "",
      servicesOffered: "",
      craftsman: "",
      totalAmount: ""
    });
  };

  render() {
    const {
      name,
      phone,
      pickUpDate,
      receivedBy,
      servicesOffered,
      craftsman,
      totalAmount
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography component="h1" variant="h4" align="center">
            Create Customer
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="name"
                name="name"
                value={name}
                onChange={this.onChange}
                label="Name"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <InputMask
                mask="(+256) 999 999 999"
                value={phone}
                onChange={this.onChange}
              >
                {() => (
                  <TextField
                    id="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    autoComplete="phone"
                  />
                )}
              </InputMask>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="pickUpDate"
                name="pickUpDate"
                value={pickUpDate}
                onChange={this.onChange}
                label="Pick Up Date"
                type="date"
                fullWidth
                autoComplete="off"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="receivedBy"
                name="receivedBy"
                value={receivedBy}
                onChange={this.onChange}
                label="Received by"
                fullWidth
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="servicesOffered"
                select
                name="servicesOffered"
                value={servicesOffered}
                onChange={this.onChange}
                label="Services offered*"
                fullWidth
                helperText="Please select service"
                InputLabelProps={{
                  shrink: true
                }}
              >
                {services.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="craftsman"
                name="craftsman"
                value={craftsman}
                onChange={this.onChange}
                label="Craftman"
                fullWidth
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="totalAmount"
                name="totalAmount"
                value={totalAmount}
                onChange={this.onChange}
                label="Total Amount"
                type="number"
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
                Save Customer
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateCustomer);
