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
    //maps current question with answer options
    const AnswerOptions = quizQuestions.map(question =>
      question.answers
    );
    this.setState({
      //assigns the question ti the first question in the map, with the corresponding answer options
      question: quizQuestions[0].question,
      answerOptions: AnswerOptions[0]
    });
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

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  //end of quiz. result is fetched using getResult() func
  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
   
  setNextQuestion() {
    //increments counter and resets the state to the relevant information for the new question
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
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
        <body>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        </body>
        
      </div>
    );

  }
}

export default Preferences;