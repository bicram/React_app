import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {


    return (
      <div className="App">   
        <div className="container">
            <Header branding="wedho asijh asio " />
            <Contact
            name="dip sarker"
            email="naoidefo@oiodsf.com"
            phone="aosdjoifoajoj"
            />
            <Contact 
              name="bikram sarker"
              email="bal@chal.com"
              phone="1452236"
            />
        </div>
      </div>
    );
  }
}
export default App;
