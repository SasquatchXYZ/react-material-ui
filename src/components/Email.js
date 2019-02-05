import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 10
  },
  textField: {
    marginLeft: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class EmailForm extends Component {
  state = {
    email: ''
  };

  handleInputChange = event => {
    this.setState({email: event.target.value})
  };

  handleFormSubmit = () => {

    const emailRX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    if (emailRX.test(this.state.email)) {
      console.log('Send to Database!')
    } else {
      console.log('That is not a valid Email...')
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16} direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h4" color="primary">
              Get Trek Tips Updates
            </Typography>
            {/*<Typography variant="subtitle1">
              Standard license
            </Typography>*/}
          </Grid>
          <form>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item>
                <TextField
                  id="filled-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="filled"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  <Icon className={classes.rightIcon}>send</Icon>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

EmailForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailForm);