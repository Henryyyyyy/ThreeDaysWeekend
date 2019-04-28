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
import noonAct from './img/noonAct.jpg';
import rooftopBar from './img/roof.jpg'


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
    <div className= "fullGrid" className={classes.root}>

      <Grid container spacing={40} className= "toppad pad">
        <Grid item xs>

          <center><button className=" color button"><h3 className= "font"> Day 1 </h3></button></center>

        </Grid>

        <Grid item xs>

          <center><button className="color button"><h3 className= "font"> Day 2 </h3></button></center>


        </Grid>

        <Grid item xs>

          <center><button className="color button"><h3 className= "font"> Day 3 </h3></button></center>


        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className= "pad">
        <Grid item xs>
          <Paper className={classes.paper}>Breakfast</Paper>
          <center><img src={breakfast} className="pics" alt=""/>
          <Paper className={classes.paper}>breakfastArray[0].name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Breakfast</Paper>
          <center><img src={breakfast} className="pics" alt=""/> 
          <Paper className={classes.paper}>breakfastArray[1].name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Breakfast</Paper>
          <center><img src={breakfast} className="pics" alt=""/> 
          <Paper className={classes.paper}>breakfastArray[2].name</Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className= "pad">

        <Grid item xs>

          <Paper className={classes.paper}>Morning Activity</Paper>
          <center> <img src={morningAct} className="pics" alt=""/> 
          <Paper className={classes.paper}>MorningAct Name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Morning Activity</Paper>
          <center> <img src={morningAct} className="pics" alt=""/>
          <Paper className={classes.paper}>MorningAct Name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Morning Activity</Paper>
          <center><img src={morningAct} className="pics" alt=""/>
          <Paper className={classes.paper}>MorningAct Name</Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className="pad">

        <Grid item xs>

          <Paper className={classes.paper}>Lunch</Paper>
          <center><img src={lunch} className="pics" alt=""/>
          <Paper className={classes.paper}>lunchArray[0].name</Paper></center>

        </Grid>

        <Grid item xs >

          <Paper className={classes.paper}>Lunch</Paper>
          <center><img src={lunch} className="pics" alt=""/>
          <Paper className={classes.paper}>lunchArray[1].name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Lunch</Paper>
          <center><img src={lunch} className="pics" alt=""/>
          <Paper className={classes.paper}>lunchArray[2].name</Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className="pad">

        <Grid item xs>

          <Paper className={classes.paper}>Afternoon Activity</Paper>
          <center><img src={noonAct} className="pics" alt=""/>
          <Paper className={classes.paper}>AfternoonAct Name</Paper></center>
        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Afternoon Activity</Paper>
          <center><img src={noonAct} className="pics" alt=""/>
          <Paper className={classes.paper}>AfternoonAct Name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Afternoon Activity</Paper>
          <center><img src={noonAct} className="pics" alt=""/>
          <Paper className={classes.paper}>AfternoonAct Name</Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className= "pad">

        <Grid item xs>

          <Paper className={classes.paper}>Dinner </Paper>
          <center><img src={dinner} className="pics" alt=""/>
          <Paper className={classes.paper}>dinnerArray[0].name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Dinner</Paper>
          <center><img src={dinner} className="pics" alt=""/>
          <Paper className={classes.paper}>dinnerArray[1].name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Dinner</Paper>
          <center><img src={dinner} className="pics" alt=""/>
          <Paper className={classes.paper}>dinnerArray[2].name</Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className = "pad extrapadB">

        <Grid item xs>

          <Paper className={classes.paper}>Night Activity</Paper>
          <center><img src={rooftopBar} className="pics" alt=""/>
          <Paper className={classes.paper}>NightAct Name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Night Activity</Paper>
          <center><img src={rooftopBar} className="pics" alt=""/>
          <Paper className={classes.paper}>NightAct Name</Paper></center>

        </Grid>

        <Grid item xs>

          <Paper className={classes.paper}>Night Activity</Paper>
          <center><img src={rooftopBar} className="pics" alt=""/>
          <Paper className={classes.paper}>NightAct Name</Paper></center>
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