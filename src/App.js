import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm.js'
import Teams from './components/Teams.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    //Fetches data from SportsDB
    const URL = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';
    axios.get(URL)
      .then(res => {
        const teams = res.data.teams; // Grabs the team data
        if(typeof teams === 'object'){
          this.setState({ teams }) // Sets state of app
        }
      })
      .catch(error => {
        console.log(error);
      });
  }


  onInputTyping(e){
    //to prevent from browser reloading again when you click on button
    e.preventDefault();
    //Check that button is working with console statement
    console.log('Hello World');
  }

  render() {
    return (
      <div className="App">
        <header className="sports_header">
          <h1 className="sports_header_title">NBA Team Encyclopedia</h1>
        </header>
        <main>
          <SearchForm {...this.state} onInputTyping={this.onInputTyping}/>
          <Teams {...this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
