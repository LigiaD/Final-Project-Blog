import React, { Component } from 'react';

class NavBar2 extends Component {
    render() {
        return (
            
            <nav id="nav">
            <ul id="navigation">
                <li><a href="#" class="first">Home</a></li>
                <li><a href="#">Services &raquo;</a>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Logo Design</a></li>
                        <li><a href="#">Identity & Branding &raquo;</a>
                            <ul>
                                <li><a href="#">Business Cards</a></li>
                                <li><a href="#">Brochures</a></li>
                                <li><a href="#">Envelopes</a></li>
                                <li><a href="#">Flyers</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Wordpress</a></li>
                    </ul>
                </li>
                <li><a href="#">Portfolio &raquo;</a>
                    <ul>
                        <li><a href="#">Graphic Design</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Architecture</a></li>
                        <li><a href="#">Calligraphy</a></li>
                        <li><a href="#">Film &raquo;</a>
                            <ul>
                                <li><a href="#">John Carter</a></li>
                                <li><a href="#">The Avengers</a></li>
                                <li><a href="#">The Amazing SpiderMan</a></li>
                                <li><a href="#">Madagascar 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Graffity </a></li>
                    </ul>
                </li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#" class="last">Contact</a></li>
            </ul>
        </nav>

            
        );
    }
}

export default NavBar2;