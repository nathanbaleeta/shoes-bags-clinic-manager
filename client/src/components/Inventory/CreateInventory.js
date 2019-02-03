import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

import API from "../common/APIUtils";

const styles = theme => ({});

const categories = [
  {
    value: "Shoes",
    label: "Shoes"
  },
  {
    value: "Bags",
    label: "Bags"
  }
];

class CreateInventory extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      quantity: "",
      category: "",
      stock: ""
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
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      category: this.state.category,
      stock: this.state.stock
    };

    API.post("inventories", expense)
      .then(response => {
        console.log(response);
        //this.handleClose();
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({
      name: "",
      price: "",
      quantity: "",
      category: "",
      stock: ""
    });
  };

  render() {
    const { name, price, quantity, category, stock } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Typography component="h1" variant="h4" align="center">
            Create Inventory
          </Typography>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="name"
                name="name"
                value={name}
                onChange={this.onChange}
                label="Product Name"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="price"
                name="price"
                value={price}
                onChange={this.onChange}
                type="number"
                label="Price"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={this.onChange}
                type="number"
                label="Quantity"
                fullWidth
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                id="category"
                select
                name="category"
                value={category}
                onChange={this.onChange}
                label="Category*"
                fullWidth
                helperText="Please select category"
                InputLabelProps={{
                  shrink: true
                }}
              >
                {categories.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="stock"
                name="stock"
                value={stock}
                onChange={this.onChange}
                label="Stock"
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
                Save Inventory
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateInventory);
