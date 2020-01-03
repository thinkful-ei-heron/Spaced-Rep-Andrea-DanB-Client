import React, {Component} from 'react';
import GuessInput from '../GuessInput/GuessInput';
import './LearnCard.css';

class LearnCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('cap', this.props);
    const button = () => {
      return (
        <button
          type="button"
          onClick={e => this.props.nextWord(e)}
          autoFocus>
          Try another word!
        </button>
      );
    };
    const display = () => {
      if (!this.props) {
        return (
          <div>
            <h1>loading...</h1>
          </div>
        );
      } else if (this.props.isCorrect === false) {
        return (
          <>
            <div className="DisplayScore">
              <p>Your total score is: {this.props.score}</p>
              <h2>Good try, but not quite right :(</h2>
            </div>
            <div className="DisplayFeedback">
              <p>
                The correct translation for {this.props.currentWord} was{' '}
                {this.props.answer} and you chose {this.props.guess}!
              </p>
              {button()}
            </div>
          </>
        );
      } else if (this.props.isCorrect === true) {
        return (
          <>
            <div className="DisplayScore">
              <p>Your total score is: {this.props.score}</p>
              <h2>You were correct! :D</h2>
            </div>
            <div className="DisplayFeedback">
              <p>
                The correct translation for {this.props.currentWord} was{' '}
                {this.props.answer} and you chose {this.props.guess}!
              </p>
              {button()}
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="DisplayScore">
              <p>Your total score is: {this.props.score}</p>
            </div>
            <h2>Translate the word:</h2>
            <span className="testWord">{this.props.word}</span>
            <GuessInput handleSubmit={this.props.handleSubmit} />
          </>
        );
      }
    };
    return (
      <main className="learnCard">
        {display()}
        <p>You have answered this word correctly {this.props.correct} times.</p>
        <p>You have answered this word incorrectly {this.props.wrong} times.</p>
      </main>
    );
  }
}

export default LearnCard;
