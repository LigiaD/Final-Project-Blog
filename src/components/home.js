import React, { Component } from 'react';

import NavBar from '../components/nav-bar';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Turcoaz Luna's blog</h1>
         <NavBar/>
      </div>
      
    );
   
  }
   
}

export default Home;