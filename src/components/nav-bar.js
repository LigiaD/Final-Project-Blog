import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
        <div>
            <div id="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="javascript:void(0)" className="dropbtn">About Me</a></li>
                    <li><a href="#" className="dropbtn">Articles</a>  </li>
                     <li><a href="#" className="dropbtn">Fashion Tutorials</a> </li>                          
                    <li><a href="#">News</a></li>
                </ul>
                
            </div>
            
           

        </div>

            
        );
    }
}

export default NavBar;