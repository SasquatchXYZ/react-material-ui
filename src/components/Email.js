import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
  },
  textField: {
    marginLeft: theme.spacing.unit
  },
});

class EmailForm extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h4" color="primary">
              Get Trek Tips Updates
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="subtitle1">
              Standard license
            </Typography>
            <TextField
              id="filled-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="filled"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

EmailForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailForm);