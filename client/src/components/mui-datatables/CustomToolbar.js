import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { Switch, Route } from "react-router-dom";

import CreateCustomer from "../Customer/CreateCustomer";
import CreateExpense from "../Expense/CreateExpense";
import CreateInventory from "../Inventory/CreateInventory";

const styles = theme => ({
  iconButton: {},
  dialogPaper: {}
});

class CustomToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Tooltip title={"Add Customer"}>
          <IconButton className={classes.iconButton} onClick={this.handleOpen}>
            <AddIcon color="default" className={classes.addIcon} />
          </IconButton>
        </Tooltip>

        <Dialog
          id="myDialog"
          open={this.state.open}
          aria-labelledby="form-dialog-title"
          onClose={this.handleClose}
        >
          <DialogContent>
            <Switch>
              <Route path="/customers" component={CreateCustomer} />
              <Route path="/inventories" component={CreateInventory} />
              <Route path="/expenses" component={CreateExpense} />
            </Switch>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

CustomToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { name: "CustomToolbar" })(CustomToolbar);
