import React, {Component} from 'react';
import Button from '../Button/Button';

class GuessInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
    };
  }

  handleChange = (e) => {
    const guess = e.target.value
    this.setState({guess})
  }

  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e, this.state.guess)}>
        <label htmlFor="learn-guess-input">
          What's the translation for this word?
        </label>
        <input
          id="learn-guess-input"
          type="text"
          onChange={(e) => this.handleChange(e)}
          value={this.state.guess}
          required
        />
        <Button type="submit">Submit your answer</Button>
      </form>
    );
  }
}

export default GuessInput;
