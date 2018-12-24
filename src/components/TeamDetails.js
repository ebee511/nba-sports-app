import React from 'react';
import { Link } from 'react-router-dom';

const TeamDetails = (props) => {
	console.log(props);

	const NBATeam = props.location.state.team;

	return (
		<div className='App'>
			<header className="sports_header">
		    <h1 className="sports_header_title">NBA Team Encyclopedia</h1>
		  </header>
		  <main className="sports_team_details">
		  	<h2 className="sports_team_details_title">{NBATeam.strTeam}</h2>
		  	<img src={NBATeam.strTeamFanart3} alt="NBA Team Fan Art" className="sports_team_details_img"/>
		  	<div className="team_details_info_container">
			  	<h4 className="sports_team_details_info">
			  		Location 
			  	</h4>
			  	<p className="team_details_text">
			  		{NBATeam.strStadiumLocation}
			  	</p>
			  	<h4 className="sports_team_details_info">
			  		Team Manager
		  		</h4>
		  		<p className="team_details_text">
		  			{NBATeam.strManager}
	  			</p>
			  	<h4 className="sports_team_details_info">
			  		About 
			  	</h4>
		  		<p className="team_details_text" id="team_details_about">
		  			{NBATeam.strDescriptionEN}
		  		</p>
		  	</div>
		  </main>
		</div>
	)
}


export default TeamDetails;
