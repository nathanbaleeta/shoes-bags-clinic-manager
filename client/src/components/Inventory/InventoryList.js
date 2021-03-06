import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import LabelIcon from "@material-ui/icons/Label";
import API from "../common/APIUtils";
import MUIDataTable from "mui-datatables";

import CustomToolbar from "../mui-datatables/CustomToolbar";

import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";

const styles = {
  avatar: {
    margin: 10
  },
  pinkAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: pink[500]
  },
  greenAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: green[500]
  }
};

class InventoryList extends React.Component {
  state = {
    count: 100,
    data: []
  };

  componentDidMount() {
    API.get("inventories").then(res => {
      const data = res.data;
      this.setState({ data });
      console.log(data);
    });
  }

  render() {
    const { classes } = this.props;
    const columns = [
      {
        name: "",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Name",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "Price",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Quantity",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Category",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "Stock",
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
        API.delete(`inventories/${this.state.id}`).then(res => {
          console.log(res);
          console.log(res.data);
        });
      }
    };

    return (
      <MUIDataTable
        title={"Inventory List"}
        data={data.map(inventory => {
          return [
            <Avatar className={classes.pinkAvatar}>
              <LabelIcon />
            </Avatar>,
            <div style={{ color: "darkblue" }}>{inventory.name}</div>,
            inventory.price,
            inventory.quantity,
            inventory.category,
            inventory.stock,

            <IconButton color="primary">
              <DeleteIcon color="primary" />
            </IconButton>
          ];
        })}
        columns={columns}
        options={options}
      />
    );
  }
}

export default withStyles(styles)(InventoryList);
