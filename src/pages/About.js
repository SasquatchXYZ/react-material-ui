import React, {Component} from 'react';
import Nav from '../components/Nav';
import Paper from '../components/Paper';
import Typography from '@material-ui/core/Typography';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav
          linkTo="/"
          linkTitle="Back"
        />
        <Paper>
          <Typography variant="h4" color="primary">Meet the Team...</Typography>
        </Paper>
      </div>
    )
  }
}