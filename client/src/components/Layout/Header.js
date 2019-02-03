import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PersonIcon from "@material-ui/icons/Person";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  primary: {
    color: "white"
  },
  icon: {
    color: "white"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color: "inherit"
  },
  drawerPaper: {
    width: drawerWidth,
    color: "white",
    background: "#00008B"
  },
  drawerHeader: {
    display: "flex",
    background: "white",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class Header extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="inherit"
          style={{ background: "#FFFFFF", borderBottom: "3px solid blue" }}
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open} variant="dense">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="primary"
              className={classes.grow}
            >
              Shoes & Bags Clinic Manager
            </Typography>

            <section className={classes.toolbarButtons}>
              <IconButton color="inherit">
                <PersonIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="More Options">
                <MoreVertIcon
                  items={["Profile", "User Management", "Logout"]}
                />
              </IconButton>
            </section>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              onClick={this.handleDrawerClose}
              style={{ color: "black" }}
            >
              {theme.direction === "ltr" ? <CloseIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />

          <MenuList>
            <MenuItem component={Link} to="/">
              <ListItemIcon className={classes.icon}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Dashboard"
              />
            </MenuItem>
            <MenuItem component={Link} to="/customers">
              <ListItemIcon className={classes.icon}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Customer Sales"
              />
            </MenuItem>

            <MenuItem component={Link} to="/inventories">
              <ListItemIcon className={classes.icon}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Inventory Stock"
              />
            </MenuItem>
            <MenuItem component={Link} to="/expenses">
              <ListItemIcon className={classes.icon}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Expenses"
              />
            </MenuItem>
            <MenuItem component={Link} to="/reports">
              <ListItemIcon className={classes.icon}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Reports"
              />
            </MenuItem>
            <MenuItem component={Link} to="/logout">
              <ListItemIcon className={classes.icon}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                inset
                primary="Logout"
              />
            </MenuItem>
          </MenuList>
          <Divider />
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);
