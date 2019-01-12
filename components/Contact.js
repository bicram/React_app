import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Contact extends Component {
  render() {


    const {name,email,phone}=this.props;
    return (
      <div className="card card-body mb-3">
        <h4 style={headingStyle}>{name}</h4>
      	<ul className="list group">
      		<li className="list group-item">email:{email}</li>
      		{/* <li className="list group-item">phone:{phone}</li> */}
      		<li className="list group-item">phone:{name}</li>          
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


