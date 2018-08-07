import React, { Component } from 'react';

import NavLink from "./nav_links";

class NavBar extends Component {
    render() {
        return (
        <div>
            <nav>
            <div id="navigation">
                <ul>
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Me</NavLink></li>
                    <li><NavLink to='#'>Articles</NavLink></li>
                    <li><NavLink to='/tutorials'>Fashion Tutorials</NavLink></li>                          
                    <li><NavLink to='#'>News</NavLink></li>
                </ul>
            </div>
            </nav>
           

        </div>

            
        );
    }
}

export default NavBar;