import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Teams extends Component {
	constructor(props) {
		super();
		this.state={
			teamFilter: ""
		}
	}

	handleChange = (e) => {
		this.setState({
			teamFilter: e.target.value
		})
	}

	render(){
		//store the teams in a variable
		//if you cannot find this.state.teamFilter within the specific strTeam, then do not return it
		//negative 1 equals value it cannot find
		//however in the instance where you can find it where, then return the contact and keep it within filtered contacts variable
		//to make sure capitalization isnt a problem, use toLowerCase method
		const filteredTeams = this.props.teams.filter(
			(team) => {
				return team.strTeam
				.toLowerCase()
				.indexOf(this.state.teamFilter.toLowerCase()) !== -1
			}
		);
		
		return (
			<main>
				<form className="sports_search_form">
					<input 
						className="sports_search_input" 
						placeholder="Search team..." 
						type='text' 
						value={this.state.teamFilter}
						onChange={this.handleChange.bind(this)}
					/>
					<button className="sports_search_button">Search</button>
				</form>

				<ul className="sports_team_list">
					{filteredTeams.map((team, index) => (
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
			</main>
		)
	}
}