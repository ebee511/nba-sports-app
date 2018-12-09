import React from 'react';

const Form = props => (
	<form onSubmit={props.onInputTyping} className="sports_search_form">
		<input className="sports_search_input" placeholder="Search team..." type='text'/>
		<button className="sports_search_button">Search</button>
	</form>
);

export default Form;