import React from 'react';

import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer>

            <div>
                <h1>TechyStar</h1>
                <p>@all rights reserved</p>
            </div>

            <div>
                <h5>Follow Us</h5>
                <div>
                    <a href="https://web.facebook.com/alihamza.rao.909" target={"blank"}>
                        Facebook
                    </a>
                    <a href="https://instagram.com/alihamzarao3" target={"blank"}>
                        Instagram
                    </a>
                    <a href="https://github.com/alihamzarao6" target={"blank"}>
                        Github
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;