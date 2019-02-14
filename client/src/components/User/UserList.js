import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import API from "../common/APIUtils";
import MUIDataTable from "mui-datatables";
import CustomToolbar from "../mui-datatables/CustomToolbar";

import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import deepPurple from "@material-ui/core/colors/deepPurple";

const styles = {
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
};

class UserList extends React.Component {
  state = {
    count: 100,
    data: []
  };

  componentDidMount() {
    API.get("users").then(res => {
      const data = res.data;
      this.setState({ data });
      console.log(data);
    });
  }

  CapitalizeInitials(str1, str2) {
    return str1.charAt(0).toUpperCase() + str2.charAt(0).toUpperCase();
  }

  render() {
    const { classes } = this.props;
    const columns = [
      {
        name: "",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Firstname",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Lastname",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Username",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Password",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Actions",
        options: {
          filter: true,
          sort: false
        }
      }
    ];

    const { data, count } = this.state;

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "stacked",
      serverSide: false,
      rowsPerPage: 10,
      pagination: true,
      count: count,
      customToolbar: () => {
        return <CustomToolbar />;
      },
      onRowsDelete: state => {
        API.delete(`users/${this.state.id}`).then(res => {
          console.log(res);
          console.log(res.data);
        });
      }
    };

    return (
      <MUIDataTable
        title={"User List"}
        data={data.map(user => {
          return [
            <Avatar className={classes.purpleAvatar}>
              {this.CapitalizeInitials(user.firstname, user.lastname)}
            </Avatar>,
            user.firstname,
            user.lastname,
            <div style={{ color: "darkblue" }}>{user.username}</div>,
            user.password,

            <IconButton color="primary">
              <EditIcon color="primary" />
            </IconButton>
          ];
        })}
        columns={columns}
        options={options}
      />
    );
  }
}

export default withStyles(styles)(UserList);
