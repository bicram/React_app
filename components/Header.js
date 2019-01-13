import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	const{branding}=props;

	return ( 
		
		<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
			<div className="container">
					<a href="/" className="navbar-brand">
						{branding}
					</a>
					<div>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a href="/" className="nav-link">home</a>
						</li>
					</ul>
					</div>
			</div>
		</nav>

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