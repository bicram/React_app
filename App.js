import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {


    return (
      <div className="App">

        <Header branding="contact manager stuff"/>
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
    );
  }
}
export default App;
