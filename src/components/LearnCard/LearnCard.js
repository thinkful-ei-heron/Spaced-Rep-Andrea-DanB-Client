import React, {Component} from 'react';
import GuessInput from '../GuessInput/GuessInput'

class LearnCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <main>
        <h2>Translate the word:</h2>
        <span>{this.props.word}</span>
        <p>Your total score is: {this.props.score}</p>
        <p>You have answered this word correctly {this.props.correct} times.</p>
        <p>You have answered this word incorrectly {this.props.wrong} times.</p>
        <GuessInput />
      </main>
    )
  }
}

export default LearnCard;
