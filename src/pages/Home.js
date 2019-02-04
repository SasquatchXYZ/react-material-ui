import React, {Component} from 'react';
import Nav from '../components/Nav';
import FAQ from '../components/FAQ';
import Paper from '../components/Paper';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav
          linkTo="/about"
          linkTitle="About"
        />
        <Paper>
          <Typography variant="h4" color="primary">Meet Trek Tips...</Typography>
        </Paper>
        <Paper>
          <Typography variant="h4" color="primary">Frequently Asked Questions</Typography>
          <FAQ/>
        </Paper>
        <Typography variant="h4" color="primary">Frequently Asked Questions</Typography>
        <FAQ/>

      </div>
    )
  }
}