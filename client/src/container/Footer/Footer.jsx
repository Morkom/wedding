import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
    <div className="app__footer section__padding">
        <FooterOverlay />
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">Adresa</p>
                <p className="p__opensans">732287154</p>
            </div>
            <div className="app__footer-links_logo">
                <img
                    src={images.gericht}
                    alt="footer logo"
                />
                <p className="p__opensans">May The Force Be With You</p>
                <img
                    src={images.spoon}
                    alt="spoon"
                    className="spoon__img"
                    style={{ marginTop: 15 }}
                />
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Mon-Fri: 10-10</p>
                <p className="p__opensans">Sat-Sun:: 10-12</p>
            </div>
        </div>

        <div className="footer__copyright">
            <p className="p__opensans">2023 All Rights Reserved</p>
        </div>
    </div>
);

export default Footer;
