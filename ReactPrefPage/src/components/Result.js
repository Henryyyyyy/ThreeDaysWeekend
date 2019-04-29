
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
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

var breakfastArray = [
  {
    name: "Chipotle",
    location: "TC"
  },
  {
    name: "McDonalds"  
  },
  {
    name: "Subway"
  }
];

 
var b1a = breakfastArray[0].location;
var b2 = breakfastArray[1].name;
var b3 = breakfastArray[2].name;

class Results extends Component {
constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    popoverOpen: false
  };
}

toggle() {
  this.setState({
    popoverOpen: !this.state.popoverOpen
  });
}

render(){

  return (
    <div className= "fullGrid" >

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
          <center><Paper className = "gridHead">Breakfast</Paper></center>
          <center><img src={breakfast} className="pics" alt=""/>
          <Paper > 
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[0].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}
            </PopoverBody>
            
            </Popover>
      </div>
          
          
          
          </Paper>
         
          </center>
          

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Breakfast</Paper></center>
          <center><img src={breakfast} className="pics" alt=""/> 
          <Paper >

          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[1].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Breakfast</Paper></center>
          <center><img src={breakfast} className="pics" alt=""/> 
          <Paper>
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[2].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className= "pad">

        <Grid item xs>

          <center><Paper className = "gridHead">Morning Activity</Paper></center>
          <center> <img src={morningAct} className="pics" alt=""/> 
          <Paper >Perkins</Paper></center>

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Morning Activity</Paper></center>
          <center> <img src={morningAct} className="pics" alt=""/>
          <Paper >Wilson Gym</Paper></center>

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Morning Activity</Paper></center>
          <center><img src={morningAct} className="pics" alt=""/>
          <Paper> Brodie Gym</Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className="pad">

        <Grid item xs>

          <center><Paper className = "gridHead">Lunch</Paper></center>
          <center><img src={lunch} className="pics" alt=""/>
          <Paper >
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[0].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

        <Grid item xs >

          <center><Paper className = "gridHead">Lunch</Paper></center>
          <center><img src={lunch} className="pics" alt=""/>
          <Paper >
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[0].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Lunch</Paper></center>
          <center><img src={lunch} className="pics" alt=""/>
          <Paper>
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[0].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className="pad">

        <Grid item xs>

          <center><Paper className = "gridHead">Afternoon Activity</Paper></center>
          <center><img src={noonAct} className="pics" alt=""/>
          <Paper >Perkins</Paper></center>
        </Grid>

        <Grid item xs>

           <center><Paper className = "gridHead">Afternoon Activity</Paper></center>
          <center><img src={noonAct} className="pics" alt=""/>
          <Paper >CS 290 Office Hours</Paper></center>

        </Grid>

        <Grid item xs>

           <center><Paper className = "gridHead">Afternoon Activity</Paper></center>
          <center><img src={noonAct} className="pics" alt=""/>
          <Paper >Eno Quarry</Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className= "pad">

        <Grid item xs>

          <center><Paper className = "gridHead">Dinner </Paper> </center>
          <center><img src={dinner} className="pics" alt=""/>
          <Paper >
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[0].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Dinner</Paper></center>
          <center><img src={dinner} className="pics" alt=""/>
          <Paper >
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[0].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Dinner</Paper></center>
          <center><img src={dinner} className="pics" alt=""/>
          <Paper >
          <div>
            <Button className= "color button popText" id="Popover1" type="button">
            {breakfastArray[0].name}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
            <PopoverBody> Location: {b1a}</PopoverBody>
            </Popover>
      </div>
            </Paper></center>

        </Grid>

      </Grid>
      <br></br>

      <Grid container spacing={40} className = "pad extrapadB">

        <Grid item xs>

           <center><Paper className = "gridHead">Night Activity</Paper> </center>
          <center><img src={rooftopBar} className="pics" alt=""/>
          <Paper >Devines</Paper></center>

        </Grid>

        <Grid item xs>

           <center><Paper className = "gridHead">Night Activity</Paper> </center>
          <center><img src={rooftopBar} className="pics" alt=""/>
          <Paper >Shooters</Paper></center>

        </Grid>

        <Grid item xs>

          <center><Paper className = "gridHead">Night Activity</Paper></center>
          <center><img src={rooftopBar} className="pics" alt=""/>
          <Paper>Mavericks</Paper></center>
        </Grid>

      </Grid>
      <br></br>

    </div>
  

  );

}



}
export default Results;