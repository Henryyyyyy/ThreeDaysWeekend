import React, { Component } from 'react';
import Gender from './Gender';
import Age from './Age';
import Pref1 from './Pref1';
import Pref2 from './Pref2';
import Pref3 from './Pref3';
import Pref4 from './Pref4';
import Pref5 from './Pref5';


export class PrefPageMain extends Component {
  state = {
    step: 1,
    gender: 0,
    age: 0,
    pref1: 0,
    pref2: 0,
    pref3: 0,
    pref4: 0,
    pref5: 0
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value});
  };

  render() {
    const { step } = this.state;
    const { gender, age, pref1, pref2, pref3, pref4, pref5} = this.state;
    const values = { gender, age, pref1, pref2, pref3, pref4, pref5};

    switch (step) {
      case 1:
        return (
          <Gender
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}/>
        );
      case 2:
        return (
          
        );
      case 3:
        return (
          <Pref1
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <Pref2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return (
          <Pref3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return (
          <Pref4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 7:
        return (
          <Pref5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default UserForm;