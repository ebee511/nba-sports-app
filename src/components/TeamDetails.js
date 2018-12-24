import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

const TeamDetails = (props) => {
	console.log(props);

	const NBATeam = props.location.state.team;

	return (
		<div className='App'>
			<header className="sports_header">
				<button className="team_details_button">
					<Link to={{
						pathname: `/`
					}}> 
					<FontAwesomeIcon className="team_details_back_arrow" icon="arrow-left"/>
					</Link>
				</button>
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
