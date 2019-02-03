import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import API from "../common/APIUtils";

import MUIDataTable from "mui-datatables";

import CustomToolbar from "../mui-datatables/CustomToolbar";

export default class ExpenseList extends React.Component {
  state = {
    count: 100,
    data: []
  };

  componentDidMount() {
    API.get("expenses").then(res => {
      const data = res.data;
      this.setState({ data });
      console.log(data);
    });
  }

  render() {
    const columns = [
      {
        name: "Payee",
        options: {
          filter: false,
          sort: true
        }
      },
      {
        name: "Amount",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Item",
        options: {
          filter: false,
          sort: false
        }
      },
      {
        name: "Comment",
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
        API.delete(`expenses/${this.state.id}`).then(res => {
          console.log(res);
          console.log(res.data);
        });
      }
    };

    return (
      <MUIDataTable
        title={"Expense List"}
        data={data.map(expense => {
          return [
            <div style={{ color: "darkblue" }}>{expense.payee}</div>,
            expense.amount,
            expense.item,
            expense.comment,
            expense.created,

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
