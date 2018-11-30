import React, { Component } from 'react';
import TeamName from './TeamName.js';

export default class Teams extends Component {

	render(){
		//store the teams in a variable
		const teams = this.props.teams;
		//check teams data is passed
		console.log(teams);

		return (

			<ul className="sports_team_list">
				{teams.map((team, index) => (
					<li className="sports_team_list_item" key={index}>
						<img 
							width='100' 
							className="sports_team_img" 
							src={team.strTeamBadge} 
							alt='NBA Team Logo'
						/>
							{ team.strTeam.length < 16 ? `${ team.strTeam }` : `${ team.strTeam.substring(0, 16)}...` }
					</li>
				))}
			</ul>
		)
	}
}