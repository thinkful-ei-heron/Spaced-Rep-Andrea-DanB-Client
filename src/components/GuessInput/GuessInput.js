import React, {Component} from 'react';
import Button from '../Button/Button';

class GuessInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guess: '',
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="learn-guess-input">What's the translation for this word?</label>
        <input id="learn-guess-input" type="text" required/>
        <Button type="submit">Submit your answer</Button>
      </form>
    );
  }
}

export default GuessInput;
