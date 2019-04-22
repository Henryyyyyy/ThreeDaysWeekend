import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import quizQuestions from '../api/quizQuestions';
import Quiz from './Quiz';
import Result from './Result';
import logo from '../logo.png';
import user from "../user.svg"
import home from "../home.svg"


class Preferences extends Component {
    constructor(props) {
    super(props);

    this.state = {
      counter: 0, //where in the quiz
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      
      answersCount: [],
      result: ''
    };
    //bind the event handler
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  DEBUG = true;
  
  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  //setting the answer and then setting the next question
  handleAnswerSelected(event) {
    
    //logic for choosing an answer
    this.setUserAnswer(event.currentTarget.value);
    console.log(event)
    console.log(event.currentTarget)
    console.log(event.currentTarget.value)

    //go to next question
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      //quiz has ended
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  //helper of handleAnserSelected
  setUserAnswer(answer) {
    console.log(answer)
    this.state.answersCount.push(answer)
    this.setState({
      answersCount: this.state.answersCount,
      answer: answer}
    );
  }

  //end of quiz. result is fetched using getResult() func
  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  //initiate the quiz when first boosted
  renderQuiz() {
    return (
      //this is the Quiz object in react component
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length} //quizQuestion is the big jason string
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }


  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Create Your Itinerary</h2>
          </div>

        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default Preferences;