import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import Commute from '@material-ui/icons/CommuteOutlined';
import DoneAll from '@material-ui/icons/DoneAll';
import TurnedIn from '@material-ui/icons/TurnedIn';
import Room from '@material-ui/icons/RoomRounded';

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
          {/*<Typography gutterBottom variant="subtitle1">
            Standard license
          </Typography>*/}
          <List>
            <ListItem>
              <ListItemIcon>
                <FlightTakeoff color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Flight Takeoff"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Commute color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Commute Outlined"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DoneAll color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Done All"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TurnedIn color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Turned In"/>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Room color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Room Rounded"/>
            </ListItem>
          </List>
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