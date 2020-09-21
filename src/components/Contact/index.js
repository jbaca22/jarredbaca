import React from 'react';

function Contact(props) {

    return (
		<section id="contact-me" class="contact-info">
        <h3>Contact Me</h3>
        <div className="flex-row">
            <ul>
                <li>
                    <a href="mailto:jarredbaca@gmail.com">
                        <img src="../Portfolio-Website/Assets/Images/email logo.png" width="15%" height="15%" alt="email logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jarredbaca22/" target="_blank"> 
                        <img src="../Portfolio-Website/Assets/Images/linkdin logo.png" width="15%" height="15%" alt="linkdin logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jbaca22" target="_blank">
                        <img src="../Portfolio-Website/Assets/Images/github logo.png" width="15%" height="15%" alt="Github logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/jarred_baca22/" target="_blank">
                        <img src="../Portfolio-Website/Assets/Images/insta logo.jpeg" width="15%" height="15%" alt="Insta logo"/>
                    </a>
                </li>
            </ul>
        </div>
		</section>
    );
}

export default Contact;

