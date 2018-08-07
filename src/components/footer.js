import React, { Component } from 'react';




class Footer extends Component {
    render() {
        return (

            <div className="footer">
                <div className="footer__text">
                    <ul>
                        <li><a href="#">Contact Me</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Subscribe</a></li>
                    </ul>
                </div>
                <div className="footer__border"></div>
                <div className="footer__icons">
                    <i class="fab fa-pinterest"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-facebook-messenger"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram"></i>
                </div>
               
            </div>

        );

    }




}

export default Footer;