import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import AreaChart from "../components/analytics/AreaChart";
import PieChart from "../components/analytics/PieChart";
import BarChart from "../components/analytics/BarChart";
import Gauge from "../components/analytics/Gauge";
import ScatterChart from "../components/analytics/ScatterChart";

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

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <Paper className={classes.paper} align="center">
              {/*<img src="group.png" alt="Kitten" height="52" width="52" /> */}
              <Typography component="h2" variant="h5" align="left" gutterBottom>
                Daily Performance
              </Typography>

              <Gauge />

              <Typography
                variant="body2"
                align="left"
                color="primary"
                gutterBottom
              >
                View report
              </Typography>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              {/*<img src="group.png" alt="Kitten" height="52" width="52" /> */}
              <Typography component="h2" variant="h5" align="left" gutterBottom>
                Sales
              </Typography>

              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="primary"
                gutterBottom
              >
                UGX 1722
              </Typography>
              <Typography
                variant="body2"
                align="left"
                color="primary"
                gutterBottom
              >
                View report
              </Typography>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              {/*<img src="group.png" alt="Kitten" height="52" width="52" /> */}
              <Typography component="h2" variant="h5" align="left" gutterBottom>
                Expenses
              </Typography>

              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="primary"
                gutterBottom
              >
                UGX 1722
              </Typography>
              <Typography
                variant="body2"
                align="left"
                color="primary"
                gutterBottom
              >
                View report
              </Typography>
            </Paper>
            <br />
            <Paper className={classes.paper}>
              {/*<img src="group.png" alt="Kitten" height="52" width="52" /> */}
              <Typography component="h2" variant="h5" align="left" gutterBottom>
                Customers
              </Typography>

              <Typography
                component="h2"
                variant="h4"
                align="left"
                color="primary"
                gutterBottom
              >
                122
              </Typography>
              <Typography
                variant="body2"
                align="left"
                color="primary"
                gutterBottom
              >
                View report
              </Typography>
            </Paper>
          </Grid>

          {/* Right panel */}
          <Grid item xs={10}>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <PieChart />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <AreaChart />
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <ScatterChart />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <BarChart />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
