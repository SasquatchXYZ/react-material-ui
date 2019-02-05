import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IntroPic from '../img/dual.png';

console.log(IntroPic);

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  text: {},
  image: {
    width: 425,
    height: 499,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ComplexGrid(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm container className={classes.text} direction="column">
          <Typography variant="h4" color="primary">
            Meet Trek Tips...
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            Standard license
          </Typography>
        </Grid>
        <Grid item className={classes.image}>
          <img className={classes.img} alt="complex" src={IntroPic}/>
        </Grid>
      </Grid>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);