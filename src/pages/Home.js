import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Nav from '../components/Nav';
import FAQ from '../components/FAQ';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

export default class Home extends Component {


  render() {
    const {classes} = props;
    console.log(classes);

    return (
      <div>
        <Nav
          linkTo="/about"
          linkTitle="About"
        />
        <Paper className={classes.root}>
          <Typography variant="h4" color="primary">This is the homepage for Trek Tips...</Typography>
        </Paper>
        <Paper>
          <FAQ/>
        </Paper>

      </div>
    )
  }
}