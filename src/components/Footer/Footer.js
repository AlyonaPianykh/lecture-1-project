import React from 'react';
import './Footer.css';

export const Footer = ({className, children}) => {
    const socialList = () => {
        return ([
            <a key="social-1"
               href="https://www.facebook.com/">
                <img src="https://www.facebook.com/images/fb_icon_325x325.png"
                     alt="facebook"
                     className="socials"
                />
            </a>,
            <a key="social-2"
               href="https://twitter.com/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
                    alt="twitter"
                    className="socials"
                />
            </a>
        ])
    };

    return (
        <footer className={`${className}`}>
            <div>
                {
                    React.createElement('div', null, 'Follow us: ')
                }

                {socialList()}
            </div>

            <div>
                {children}
            </div>
        </footer>
    )
};
