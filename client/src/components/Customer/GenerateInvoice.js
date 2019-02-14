import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  card: {
    minWidth: 275
  },
  table: {
    minWidth: 700
  },
  tableHeader: {
    fontWeight: "bold",
    color: "black"
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}
const rows = [
  createData(1, "Brown Shoe", 10000, 2, 20000),
  createData(2, "Bag", 12000, 1, 12000),
  createData(3, "Black shoe", 20000, 1, 20000)
];

class GenerateInvoice extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={24}>
                  <Grid item xs={3}>
                    <img src="group.png" alt="Logo" />
                    <br />
                    <br />
                    <Typography
                      className={classes.title}
                      color="default"
                      gutterBottom
                    >
                      <b>Shoes & Bags Clinic,</b>
                      <br />
                      Forest Mall, Lugogo, <br />
                      Kampala, Uganda
                    </Typography>
                    <br />

                    <Typography
                      className={classes.title}
                      color="default"
                      gutterBottom
                    >
                      <br />
                      <b>BILLED TO</b> <br />
                      Sheilyd Africa Group <br />
                      Mpora Sheilla
                      <br />
                      mporasheilla@gmail.com
                    </Typography>
                  </Grid>
                  <Grid item xs={5} />
                  <Grid item xs={4}>
                    <Typography component="h1" variant="h4" color="primary">
                      INVOICE
                    </Typography>
                    <br />
                    <Typography
                      className={classes.title}
                      color="default"
                      gutterBottom
                    >
                      <b>Invoice #: 123</b>
                      <br /> Created: January 1, 2015 <br />
                      Due: February 1, 2015 <br />
                      (Payment 10 days after Invoice date)
                    </Typography>

                    <Typography
                      className={classes.title}
                      color="default"
                      gutterBottom
                    >
                      <br />
                      <b>Payment Method:</b> Cheque <br />
                      <b>Cheque #:</b> 1234
                    </Typography>
                  </Grid>
                </Grid>
                <br />

                <Table className={classes.table}>
                  <TableHead
                    style={{
                      borderBottom: "4px solid indigo"
                    }}
                  >
                    <TableRow>
                      <TableCell className={classes.tableHeader}>NO.</TableCell>
                      <TableCell align="right" className={classes.tableHeader}>
                        ITEM DESCRIPTION
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeader}>
                        PRICE
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeader}>
                        QUANTITY
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeader}>
                        SUBTOTAL
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell
                        style={{
                          borderBottom: "0px"
                        }}
                      />
                      <TableCell
                        style={{
                          borderBottom: "0px"
                        }}
                      />
                      <TableCell
                        style={{
                          borderBottom: "0px"
                        }}
                      />
                      <TableCell
                        style={{
                          borderBottom: "0px"
                        }}
                      />
                      <TableCell
                        component="th"
                        scope="row"
                        align="right"
                        style={{
                          borderBottom: "4px solid indigo"
                        }}
                      >
                        <Typography
                          className={classes.title}
                          color="default"
                          gutterBottom
                        >
                          <br />
                          <b>TOTAL:</b> UGX 52,000.00
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <br />
                <br />
              </CardContent>
              <CardActions>
                <br />
                <br />

                <Typography
                  className={classes.title}
                  color="default"
                  gutterBottom
                >
                  <b>NOTICE</b>
                  <hr
                    style={{
                      border: "2px solid indigo"
                    }}
                  />
                  <br />
                  Thank you for visiting us and making your purchase! We're glad
                  that you found what your looking for. We look forward to
                  seeing you again. Have a great day!
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(GenerateInvoice);
