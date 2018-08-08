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
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-facebook-messenger"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-instagram"></i>
                </div>
               
            </div>

        );

    }




}

export default Footer;