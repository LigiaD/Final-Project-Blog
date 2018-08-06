import React, { Component } from 'react';

import NavBar from '../components/nav-bar';

import TutorialMainPage from './tutorial-mpage';


class Tutorials extends Component {
  render() {
    return (
      
      <div>
      <div className="home__title">Turcoaz Luna's blog</div>
      <NavBar />
      <TutorialMainPage />
        
      </div>

        );
       
      }
     



    }
    
export default Tutorials;