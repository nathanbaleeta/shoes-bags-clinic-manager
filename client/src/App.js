import React from "react";
import { CssBaseline, withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

import CustomerList from "./components/Customer/CustomerList";
import InventoryList from "./components/Inventory/InventoryList";
import ExpenseList from "./components/Expense/ExpenseList";
import UserList from "./components/User/UserList";

import CustomerReport from "./components/Customer/CustomerReport";
import GenerateInvoice from "./components/Customer/GenerateInvoice";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit
    }
  }
});

const App = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <main className={classes.main}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/invoice" component={GenerateInvoice} />
        <Route path="/inventories" component={InventoryList} />
        <Route path="/expenses" component={ExpenseList} />
        <Route path="/reports" component={CustomerReport} />
        <Route path="/accounts" component={UserList} />
        <Route path="/logout" component={SignIn} />
      </Switch>
    </main>
  </React.Fragment>
);

export default withStyles(styles)(App);
