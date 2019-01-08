import React from 'react';
import { Link } from 'react-router-dom';
import Scoreboard from './Scoreboard.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft)

const TeamDetails = (props) => {
	console.log(props);

	const NBATeam = props.location.state.team;
	const length = NBATeam.strDescriptionEN.length;
	console.log(length);

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
		  	<Scoreboard {...props}/>
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
		  		<p 
		  			id="team_details_about" 
		  			className={"team_details_text " + (NBATeam.strDescriptionEN.length > 420 ? 'description_scroll' : '')}>
		  				{NBATeam.strDescriptionEN}
					</p>
		  	</div>
		  </main>
		</div>
	)
}


export default TeamDetails;
