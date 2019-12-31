import React, { Component } from 'react'
import Word from '../Word/Word'
import {Link} from 'react-router-dom'

class Dashboard extends Component {

  static defaultProps = {
    language: {
      head: '',
      id: '',
      name: '',
      total_score: '',
      user_id: ''
    },
    words: []
  }

  render(props){
    return (
      <main>
        <section>
          <h2>{this.props.language.name}</h2>
          <h2>Total correct answers: {this.props.language.total_score}</h2>
          <h3>Words to practice</h3>
          <ol>
            {this.props.words.map(word => {
              return (
                <li>
                  <Word
                    key = {word.id}
                    original = {word.original}
                    translation = {word.translation}
                    answer = {word.correct_count}
                    wrong = {word.incorrect_count}
                  />
                </li>
              )
            })}
          </ol>
          <Link to={'/learn'}>Start practicing</Link>
        </section>
      </main>
    )
  }
}

export default Dashboard;
