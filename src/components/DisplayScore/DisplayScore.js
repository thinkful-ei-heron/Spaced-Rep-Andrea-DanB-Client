import React, {Component} from 'react';

class DisplayScore extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <div class="DisplayScore">
          <p>Your total score is: {this.props.score}</p>
        </div>
    )
  }
}

export default DisplayScore;
