import React, { Component } from 'react';

class Contact extends Component {
  render() {


    const {name,email,phone}=this.props;
    return (
      <div>
        <h4>{this.props.name}</h4>
      	<ul>
      		<li>email:{email}</li>
      		<li>phone:{phone}</li>
      		<li>phone:{name}</li>          
      	</ul>
      </div>
    );
  }
}
export default Contact;


