import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {


    return (
      <div className="App">
       <div className="contaner-fluid">
         <Header/>
       </div>  
        <div className="container">
           <Contacts/> 
        </div>
      </div>
    );
  }
}
export default App;
