import React from "react";
import Typography from "@material-ui/core/Typography";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import LineChart from "../components/analytics/LineChart";
import PieChart from "../components/analytics/PieChart";
import BarChart from "../components/analytics/BarChart";
import GeoChart from "../components/analytics/GeoChart";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    color: theme.palette.text.primary
  }
});

class Visualization extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* Customer Analytics */}

        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img src="group.png" alt="Kitten" height="52" width="52" />
              <Typography component="h2" variant="h4" gutterBottom>
                Customers
              </Typography>

              <Typography component="h2" variant="h1" gutterBottom>
                1722
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography component="h2" variant="h6" gutterBottom>
                Daily Customers
              </Typography>
              <PieChart />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Typography component="h2" variant="h6" gutterBottom>
                Weekly Customers
              </Typography>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img src="charts.png" alt="Kitten" height="52" width="52" />
              <Typography component="h2" variant="h4" gutterBottom>
                Sales
              </Typography>

              <Typography component="h2" variant="h1" gutterBottom>
                1.2M
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <br />
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <PieChart width="100%" height="400px" />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <BarChart />
            </Paper>
          </Grid>
        </Grid>
        <br />

        <Typography component="h2" variant="h4" gutterBottom>
          Customers' List
        </Typography>

        <br />
      </div>
    );
  }
}

Visualization.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Visualization);
