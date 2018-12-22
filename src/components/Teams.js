import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
							<p>{ team.strTeam.length < 16 ? `${ team.strTeam }` : `${ team.strTeam.substring(0, 16)}...` }
							</p>
						<button className="sports_team_button">
							<Link to={{ 
								pathname: `/teamdetails/${team.idTeam}`,
								state: { team: team } 
							}}>
								+ View More
							</Link>
						</button>
					</li>
				))}
			</ul>
		)
	}
}