import React, {Component} from 'react';
import Nav from '../components/Nav';
import Meet from '../components/Meet';
import FAQ from '../components/FAQ';
import Paper from '../components/Paper';
import ImageCard from '../components/ImageCard';
import Typography from '@material-ui/core/Typography';
import ThreeScreens from '../img/threelg.png';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav
          linkTo="/about"
          linkTitle="About"
        />
        <Paper>
          <Meet/>
        </Paper>
        <ImageCard
          image={ThreeScreens}
        />
        <Paper>
          <Typography variant="h4" color="primary">Frequently Asked Questions</Typography>
          <FAQ/>
        </Paper>
      </div>
    )
  }
}