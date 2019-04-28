import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Result.css';
import breakfast from './img/breakfast.jpg';
import dinner from './img/dinner.jpg';
import lunch from './img/lunch.jpg';
import morningAct from './img/morningAct.jpg';
import rooftopBar from './img/rooftopBar.jpg;'
import noonAct from './img/noonAct.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

   textInput: {
  color: 'white',
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  colored:{
    color: '33508a',  
  }

});


function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid container spacing={24} className= "toppad">
        <Grid item xs>

          <Paper className={classes.paper}>Day 1</Paper>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Day 2</Paper>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Day 3</Paper>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={24}>
        <Grid item xs>

          <center><img src={breakfast} className="pics" alt=""/> <h2>Bfast Name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>breakfast</Paper>
          <center><img src={breakfast} className="pics" alt=""/> <h2> Bfast name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>breakfast</Paper>
          <center><img src={breakfast} className="pics" alt=""/> <h2> Bfast name </h2></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={24}>

        <Grid item xs>

          <Paper className={classes.paper}>Morning Activity</Paper>
          <center><h2> <img src={morningAct} className="pics" alt=""/> Morning Activity Name</h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Morning Activity</Paper>
          <center> <img src={morningAct} className="pics" alt=""/><h2> Morning Activity Name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Morning Activity</Paper>
          <center><img src={morningAct} className="pics" alt=""/><h2> Morning Activity Name </h2></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={24}>

        <Grid item xs>

          <Paper className={classes.paper}>Lunch</Paper>
          <center><img src={lunch} className="pics" alt=""/><h2> Lunch Place Name</h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Lunch</Paper>
          <center><img src={lunch} className="pics" alt=""/><h2> Lunch Place Name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Lunch</Paper>
          <center><img src={lunch} className="pics" alt=""/><h2> Lunch Place Name</h2></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={24}>

        <Grid item xs>

          <Paper className={classes.paper}>Afternoon Activity</Paper>
          <center><img src={noonAct} className="pics" alt=""/><h2> Afternoon Activity Name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Afternoon Activity</Paper>
          <center><img src={noonAct} className="pics" alt=""/><h2> Afternoon Activity Name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Afternoon Activity</Paper>
          <center><img src={noonAct} className="pics" alt=""/><h2> Afternoon Activity Name</h2></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={24}>

        <Grid item xs>

          <Paper className={classes.paper}><img src={dinner} className="pics" alt=""/> </Paper>
          <center><img src={dinner} className="pics" alt=""/><h2> Dinner Name</h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Dinner</Paper>
          <center><img src={dinner} className="pics" alt=""/><h2> Dinner Name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Dinner</Paper>
          <center><img src={dinner} className="pics" alt=""/><h2> Dinner Name </h2></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={24}>

        <Grid item xs>

          <Paper className={classes.paper}>Night Activity</Paper>
          <center><img src={rooftopBar} className="pics" alt=""/><h2> Night Activity Name </h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Night Activity</Paper>
          <center><img src={rooftopBar} className="pics" alt=""/><h2> Night Activity Name</h2></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Night Activity</Paper>
          <center><img src={rooftopBar} className="pics" alt=""/><h2> Night Activity Name </h2></center>

        </Grid>

      </Grid>
      <br></br>

    </div>

  );

}

AutoGrid.propTypes = {

  classes: PropTypes.object.isRequired,

};


export default withStyles(styles)(AutoGrid);