import React, { Component } from 'react';
import axios from 'axios';

export default class Scoreboard extends Component {
	constructor(props) {
		super(props);
		this.state={
			scores: []
		}
	}

	componentDidMount() {
	//Store teamID in variable so that the correct team details load
	const teamID = this.props.location.state.team.idTeam;
  //Fetches data from SportsDB
  const URL = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${teamID}`;
  axios.get(URL)
    .then(res => {
    	const scores = res.data.results;
    	if(typeof scores === 'object'){
    		this.setState({
    			scores
    		})
    	}
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
  }

	render() {
		const games = this.state.scores;

		return(
			<div className="scoreboard_row">
				<h3>Last 5 games</h3>
				{games.map((game, index) => (
					<div className="scoreboard_indiv_game" key={index}>
						<p>{game.strAwayTeam}: {game.intAwayScore}</p>
						<p>{game.strHomeTeam}: {game.intHomeScore}</p>
					</div>
				))}
			</div>
		)
	}
}