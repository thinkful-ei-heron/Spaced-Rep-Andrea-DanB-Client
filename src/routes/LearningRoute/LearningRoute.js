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
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
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
      totalScore
    });
  }

  render() {
    console.log(this.state);
    return (
      <section>
        <LearnCard
          word={this.state.nextWord}
          correct={this.state.wordCorrectCount}
          wrong={this.state.wordIncorrectCount}
          score={this.state.totalScore}
        />
      </section>
    );
  }
}

export default LearningRoute;
