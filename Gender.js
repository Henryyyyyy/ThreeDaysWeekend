import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

export class Gender extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        
          <h3> What Is Your Gender? </h3>
          <ButtonToolbar>
          <Button type="input" variant="secondary"> Female</Button> //need to add onClick not sure what to do for this
          <Button type="input" variant="secondary"> Male</Button> 
          <Button type="input" variant="secondary"> Other</Button>
          </ButtonToolbar>;
        
          <Button primary={true} style={styles.button} onClick={this.continue}> Continue </Button>
          

        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;