import React from 'react';
import emailLogo from "../../assets/photos/email logo.jpg"
import linkdinLogo from "../../assets/photos/linkdin logo.png"
import githubLogo from "../../assets/photos/github logo.png"
import instaLogo from "../../assets/photos/insta logo.jpeg"

function Contact(props) {

    return (
		<section id="contact-me" className="contact-info">
        <h3>Contact Me</h3>
        <div className="flex-row">
            <ul>
                <li>
                    <a href="mailto:jarredbaca@gmail.com">
                        <img src={emailLogo} width="15%" height="15%" alt="email logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jarredbaca22/" target="_blank"> 
                        <img src={linkdinLogo} width="15%" height="15%" alt="linkdin logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jbaca22" target="_blank">
                        <img src={githubLogo} width="15%" height="15%" alt="Github logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jarred_baca22/" target="_blank">
                        <img src={instaLogo} width="15%" height="15%" alt="Insta logo"/>
                    </a>
                </li>
            </ul>
        </div>
		</section>
    );
}

export default Contact;

