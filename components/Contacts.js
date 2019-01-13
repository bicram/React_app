import React, { Component } from 'react';
import Contact from './Contact'


 class Contacts extends Component {
  constructor(){
      super();
      this.state={
          Contacts:
    [
        {
            id:1,  
            name:'bikram',
            email:'saidhio@gaoij.com',
            phone:'sertertert'

        },
        {
            id:2,  
            name:'dipsarker',
            email:'dip@gaoij.com',
            phone:'35465464'

        },
        {
            id:3,  
            name:'dip',
            email:'sarker@gaoij.com',
            phone:'35465464'

        }           
    ]
      }
  }
  
  
render() {
const{Contacts}=this.state;
return(
    // div shoew na korte chaile react.Fragment use kora hoy
    <React.Fragment>
        {Contacts.map(contact=>(
        //contact er moddhe call korar jonno upore import kora hoyeche
        // ei gular value contact er moddhe pass kora ebong appjs e call kora
        <Contact 
            key={contact.id} 
            name={contact.name} 
            email={contact.email}
            phone={contact.phone}
            />
            // <h1>{contact.name}</h1>
        ))}
    </React.Fragment>

)
    
}
}
export default Contacts;