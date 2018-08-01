import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
        <div>
            <div id="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">About Me</a>
                        <ul className="dropdown-content">
                            <a href="#">My story</a>
                            <a href="#">My hobbies</a>
                            <a href="#">Photos Gallery</a>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">Articles</a>
                        <ul className="dropdown-content">
                                 <li><a href="#">Poems</a> </li> 
                                 <li><a href="#">Novels</a> </li> 
                                 <li><a href="#">Short Stories</a> </li> 
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">Fashion Tutorials</a>
                           
                             <ul className="dropdown-content">
                                <li><a href="#">Make up</a> </li>
                                <li><a href="#">Style</a> </li>
                            </ul>
                    </li>
                


                    <li><a href="#">News</a></li>
                </ul>
                
            </div>
            
            <h3 id="upper-text">Recent Posts</h3>

        </div>

            
        );
    }
}

export default NavBar;