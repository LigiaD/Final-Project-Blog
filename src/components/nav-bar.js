import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            
                <ul id="navigation">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">Dropdown</a>
                        <ul className="dropdown-content">
                            <li><a href="#">Link 1</a> </li>
                            <li><a href="#">Link 2</a> </li>
                            <li><a href="#">Link 3</a> </li>
                        </ul>
                    </li>
                </ul>
        
        );
    }
}

export default NavBar;