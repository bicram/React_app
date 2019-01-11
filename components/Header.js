import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
	const{branding}=props;
	return ( 
	<div>
		<h1 style={{color:'red',fontSize:'50px'}}> {branding} </h1>
	</div>

	);

	
}
// we are making default valur so that we can pass my app 
//..but if ywe pass in anyrhing obviously it will show up
Header.defaultProps={
	branding:'my app'
};
// proptypes must be lower case 
Header.propTypes={
	branding: PropTypes.string.isRequired
}

export default Header;