import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class TeamCard extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <Grid container
            className={classes.root}
      >
        <Grid item xs={12}>
          <Grid
            container
            spacing={24}
            justify="space-evenly"
            direction="row"
            alignItems="center"

          >
          <Grid item>
            <Paper className={classes.paper}/>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}/>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}/>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}/>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamCard);