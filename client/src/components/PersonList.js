import React from 'react';
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


export default class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>

        <Grid container spacing={24}>
          {this.state.persons.map(person => (
            <Grid item xs={3}>
              <Paper style={{ padding: '12px' }}>
                <Typography variant="title" gutterBottom>
                 	{person.name}
                </Typography>
                <Typography variant="subheading" gutterBottom>
                  {person.company.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {person.email}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

