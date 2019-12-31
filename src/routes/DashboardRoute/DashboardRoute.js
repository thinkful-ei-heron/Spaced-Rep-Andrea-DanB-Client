import React, {Component} from 'react';
import TokenService from '../../services/token-service';
import config from '../../config';
import Dashboard from '../../components/Dashboard/Dashboard';
import UserContext from '../../contexts/UserContext'

class DashboardRoute extends Component {
  static contextType = UserContext;

  async componentDidMount() {
    const response = await fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    });
    const {language, words} = await response.json();

    await this.context.setLanguage(language);
    await this.context.setWords(words);
  }


  render() {
    console.log(this.context)
    console.log(this.context.words)
    return (
      <section>
        <Dashboard 
          language = {this.context.language}
          words = {this.context.words}
        />
      </section>
    )
  }
}

export default DashboardRoute;
