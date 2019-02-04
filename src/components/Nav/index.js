import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" color="inherit" id="title" className={classes.grow}>
            Trek Tips
          </Typography>
          <Button component={Link} to={props.linkTo} color="inherit">{props.linkTitle}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(ButtonAppBar);