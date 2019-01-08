import React, { Component } from 'react';
import axios from 'axios';

export default class Scoreboard extends Component {
	constructor(props) {
		super(props);
		this.state={
			previousGames: [],
			nextGames: []
		}
	}

	componentDidMount() {
	//Store teamID in variable so that the correct team details load
	const teamID = this.props.location.state.team.idTeam;
	//Store the URLs for the API in a string literal with the ID as the variable
	const teamLastTwoURL = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${teamID}`;
	const teamNextThreeURL = `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${teamID}`;

  //Fetches data from SportsDB
  axios.all([
    axios.get(teamNextThreeURL),
    axios.get(teamLastTwoURL)
  ])
  //Pass the call results in
  .then(axios.spread((nextThreeRes, lastTwoRes) => {
  	//Store array results in variables as opposed to all the returned data
    const prevTwoGames = lastTwoRes.data.results;
    const nextThreeGames = nextThreeRes.data.events;
    //If statement to ensure the data is an array object
    if ((typeof prevTwoGames === 'object') && (typeof nextThreeGames)) {
    	//Slice the arrays so only get last 2 played game and next 3 upcoming games
    	const completedGames = prevTwoGames.slice(0, 2);
    	const upcomingGames = nextThreeGames.slice(0, 3);
    	//With newly sliced arrays, set the state so data can be used for rendering purposes
    	this.setState({
    		previousGames: completedGames,
    		nextGames: upcomingGames
    	})
    }
	}))
	.catch(error => {
		console.log(error);
	});
  }

	render() {
		const playedGames = this.state.previousGames;
		const unplayedGames = this.state.nextGames;

		return(
			<div className="scoreboard_row">
				<h4>Schedule:</h4>
				{playedGames.map((game, index) => (
					<div className="scoreboard_indiv_game" key={index}>
						<p className="scoreboard_date">{game.dateEvent}</p>
						<p>{game.strAwayTeam}: {game.intAwayScore}</p>
						<p>vs.</p>
						<p>{game.strHomeTeam}: {game.intHomeScore}</p>
					</div>
				))}
				{unplayedGames.map((game, index) => (
					<div className="scoreboard_indiv_game" key={index}>
						<p className="scoreboard_date">{game.dateEvent}</p>
						<p>{game.strAwayTeam}</p>
						<p>vs.</p>
						<p>{game.strHomeTeam}</p>
					</div>
				))}
			</div>
		)
	}
}