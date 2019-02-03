import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import SendIcon from "@material-ui/icons/Send";
import StarBorder from "@material-ui/icons/StarBorder";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class CustomerReport extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <Paper className={classes.paper} align="center">
              <List
                component="nav"
                subheader={
                  <Typography
                    component="h2"
                    variant="h5"
                    align="left"
                    gutterBottom
                  >
                    Report Type
                  </Typography>
                }
                className={classes.root}
              >
                <ListItem button>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Customer Reports" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Sales Reports" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Expenses Reports" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Inventory Reports" />
                  {/*{open ? <ExpandLess /> : <ExpandMore />}*/}
                </ListItem>
                <Collapse /*in=*{open}*/ timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText inset primary="Starred" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
              <br />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.paper} align="center">
              <Typography component="h2" variant="h5" align="left" gutterBottom>
                Customer Reports
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
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CustomerReport);
