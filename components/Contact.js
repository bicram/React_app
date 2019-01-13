import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Contact extends Component {
  state={
   showContactInfo:false

  };
 
  
  render() {
    const {name,email,phone}=this.props;
    const {showContactInfo}=this.state;

    return (
      <div className="card card-body mb-3">
        <h4>{name}{' '} 
        <i 
         onClick={()=>
          this.setState({showContactInfo:
          !this.state.showContactInfo})
        } 
        className="fas fa-sort-down"
        />
        </h4>
        {showContactInfo ?(	<ul className="list group">
      		<li className="list group-item">email:{email}</li>
      		<li className="list group-item">phone:{phone}</li>
      		<li className="list group-item">name:{name}</li>          
      	</ul>):null }
      
      </div>
    );
  }
}
// propTypes validation perpose
// proptypes must be lower case (header o contact js e validation kora )
Contact.propTypes={
  contact:PropTypes.object.isRequired
}
// stylling perpose
// const headingStyle={
//   color:'green',
//   fontSize:'40px'
// }
export default Contact;


