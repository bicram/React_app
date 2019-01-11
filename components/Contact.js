import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Contact extends Component {
  render() {


    const {name,email,phone}=this.props;
    return (
      <div>
        <h4 style={headingStyle}>{name}</h4>
      	<ul>
      		<li>email:{email}</li>
      		<li>phone:{phone}</li>
      		<li>phone:{name}</li>          
      	</ul>
      </div>
    );
  }
}
// propTypes validation perpose
// proptypes must be lower case (header o contact js e validation kora )
Contact.propTypes={
  name:PropTypes.string.isRequired,
  phone:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
}
// stylling perpose
const headingStyle={
  color:'green',
  fontSize:'40px'
}
export default Contact;


