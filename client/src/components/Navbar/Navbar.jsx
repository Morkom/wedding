import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [sticky, setSticky] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <nav className={sticky ? "app__navbar app__navbar_sticky" : "app__navbar"}>
            <ul className="app__navbar-links">
                <li className="p__opensans">
                    <a href="#home">Úvod</a>{" "}
                </li>
                <li className="p__opensans">
                    <a href="#about">Obřad</a>{" "}
                </li>
                <li className="p__opensans">
                    <a href="#menu">Hostina</a>{" "}
                </li>
                <li className="p__opensans">
                    <a href="#awards">Awards</a>{" "}
                </li>
                <li className="p__opensans">
                    <a href="#contact">Contact</a>{" "}
                </li>
            </ul>
            <div className="app__navbar-login">
                <a
                    href="#login"
                    className="p__opensans">
                    {" "}
                    Log In / Register
                </a>
                <div />
                <a
                    href="/"
                    className="p__opensans">
                    Book Table
                </a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu
                    color="#fff"
                    fontSize={27}
                    onClick={() => setToggleMenu(true)}></GiHamburgerMenu>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            fontSize={27}
                            className="overlay__close"
                            onClick={() => setToggleMenu(false)}></MdOutlineRestaurantMenu>
                        <ul className="app__navbar-smallscreen_links">
                            <li className="p__opensans">
                                <a href="#home">Úvod</a>{" "}
                            </li>
                            <li className="p__opensans">
                                <a href="#about">Obřad</a>{" "}
                            </li>
                            <li className="p__opensans">
                                <a href="#menu">Hostina</a>{" "}
                            </li>
                            <li className="p__opensans">
                                <a href="#awards">Awards</a>{" "}
                            </li>
                            <li className="p__opensans">
                                <a href="#contact">Contact</a>{" "}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
