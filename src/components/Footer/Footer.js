import React from 'react'
import './Footer.css'
//import { SocialIcon } from 'react-social-icons'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <h3>Imagination Bookstore</h3>
                    <p>Copyright © 2020</p>
                    <div className="social-links">
                        <a href="#facebook">
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                        <a href="#twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
