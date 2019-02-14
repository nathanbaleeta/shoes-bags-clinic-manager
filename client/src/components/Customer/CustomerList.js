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

class CustomerList extends React.Component {
  state = {
    count: 100,
    data: []
  };

  componentDidMount() {
    API.get("customers").then(res => {
      const data = res.data;
      this.setState({ data });
      console.log(data);
    });
  }

  CapitalizeInitial(str) {
    return str.charAt(0).toUpperCase();
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
        name: "Name",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Phone",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Pick up Date",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Received By",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "Services Purchased",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "Created",
        options: {
          filter: true,
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
        API.delete(`customers/${this.state.id}`).then(res => {
          console.log(res);
          console.log(res.data);
        });
      }
    };

    return (
      <MUIDataTable
        title={"Customer list"}
        data={data.map(customer => {
          return [
            <Avatar className={classes.purpleAvatar}>
              {this.CapitalizeInitial(customer.name)}
            </Avatar>,
            <div style={{ color: "darkblue" }}>{customer.name}</div>,
            customer.phone,
            customer.pickUpDate,
            customer.receivedBy,
            customer.servicesPurchased,
            customer.created,

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

export default withStyles(styles)(CustomerList);
