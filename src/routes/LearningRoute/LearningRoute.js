import React, {Component} from 'react';
import LearnCard from '../../components/LearnCard/LearnCard';
import config from '../../config';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';

class LearningRoute extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      nextWord: '',
      wordCorrectCount: '',
      wordIncorrectCount: '',
      isCorrect: '',
      totalScore: '',
      currentWord: '',
      answer: '',
      guess: '',
    };
  }
  componentDidMount() {
    this.fetchWord();
  }

  async fetchWord() {
    const response = await fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
    const {
      nextWord,
      wordCorrectCount,
      wordIncorrectCount,
      totalScore,
    } = await response.json();

    this.setState({
      nextWord,
      wordCorrectCount,
      wordIncorrectCount,
      totalScore,
    });
  }

  makeGuess = async (guess) => {
    const data = JSON.stringify({
      guess
    });
    console.log('FUN', data)
    const response = await fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${TokenService.getAuthToken()}`,
      },
      body: data
    });

    const reply = await response.json();
    console.log(reply)

    await this.setState({
      ...this.state,
      currentWord: this.state.nextWord,
      ...reply
    })
    //    if (!reply.isCorrect){
    //
    //      console.log("WRONG", reply.isCorrect)
    //    }
    //    await console.log(reply)
    //    console.log("REPLY", reply);
  };

  handleSubmit = (e, guess) => {
    e.preventDefault();
    this.makeGuess(guess);
    this.setState({...this.state, guess: guess})
  };

  nextWord = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isCorrect: ''
    })
  }

  render() {
    return (
      <section>
        <LearnCard
          word={this.state.nextWord}
          correct={this.state.wordCorrectCount}
          wrong={this.state.wordIncorrectCount}
          score={this.state.totalScore}
          handleSubmit={this.handleSubmit}
          isCorrect={this.state.isCorrect}
          currentWord={this.state.currentWord}
          answer={this.state.answer}
          guess={this.state.guess}
          nextWord={this.nextWord}
          translation={this.state.translation}
        />
      </section>
    );
  }
}

export default LearningRoute;
