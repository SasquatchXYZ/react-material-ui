import React, {Component} from 'react';
import Nav from '../components/Nav';
import Typography from '@material-ui/core/Typography';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav
          linkTo="/"
          linkTitle="Back"
        />
        <Typography variant="h4" color="primary">This is the About Page...</Typography>
      </div>
    )
  }
}