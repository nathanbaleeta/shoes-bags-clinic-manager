import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

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

class CreateExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      payee: "",
      amount: "",
      item: "",
      comment: ""
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
    const expense = {
      payee: this.state.payee,
      amount: this.state.amount,
      item: this.state.item,
      comment: this.state.comment
    };

    API.post("expenses", expense)
      .then(response => {
        console.log(response);
        //this.handleClose();
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      payee: "",
      amount: "",
      item: "",
      comment: ""
    });
  };

  render() {
    const { payee, amount, item, comment } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography component="h1" variant="h4" align="center">
            Create Expense
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="payee"
                name="payee"
                value={payee}
                onChange={this.onChange}
                label="Payee"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="amount"
                name="amount"
                value={amount}
                onChange={this.onChange}
                type="number"
                label="Amount"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                id="item"
                select
                name="item"
                value={item}
                onChange={this.onChange}
                label="Expense*"
                fullWidth
                helperText="Please select expense"
                InputLabelProps={{
                  shrink: true
                }}
              >
                {expenses.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                id="comment"
                name="comment"
                value={comment}
                onChange={this.onChange}
                label="Comment"
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
                Save Expense
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateExpense);
