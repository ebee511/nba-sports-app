import React, { Component } from 'react';
import axios from 'axios';
import Teams from './components/Teams.js';
import TeamDetails from './components/TeamDetails.js';
import './App.css';

class App extends Component {
 state = {
  teams: [],
  filteredTeams: []
 }
 
 componentDidMount() {
  //Fetches data from SportsDB
  const URL = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';
  axios.get(URL)
    .then(res => {
      const teams = res.data.teams; // Grabs the team data
      if(typeof teams === 'object'){
        this.setState({ 
          teams, 
          filteredTeams: teams
        }) // Sets state of app
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

  filterTeams = (teamFilter) => {
    const filteredTeams = this.state.teams
    filteredTeams.filter((team) => {
      const teamName = team.strTeam.toLowerCase()
      return teamName.indexOf(
        teamFilter.toLowerCase()
      ) !== -1
    })
    this.setState({
      filteredTeams
    })
  }

  render() {
    return (
      <div className="App">
        <header className="sports_header">
          <h1 className="sports_header_title">NBA Team Encyclopedia</h1>
        </header>
        <main>
          <Teams {...this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
