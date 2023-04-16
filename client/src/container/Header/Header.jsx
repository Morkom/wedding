import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import Countdown from "../../components/Countdown/Countdown";

const Header = () => (
    <div
        className="app__header app__wrapper section__padding"
        id="home">
        <div className="app__wrapper_info">
            <Countdown/>
            {/* <SubHeading title="Chase the new flavour" /> */}
            <div className="poem">
            <h1 className="app__header-h1">Lidé se berou pro ticho</h1>
            <h1 className="app__header-h1">které je slyšet jenom ve dvou</h1>
            <h1 className="app__header-h1">jinak to ticho neunesou</h1>
            <h1 className="app__header-h1">jinak je ticho přemůže.</h1>
            </div>
            <p
                className="p__opensans"
                style={{ margin: "2rem 0" }}></p>
        </div>
        <div className="app__wrapper_img">
            <img
                src={images.oznameni}
                alt="header img"
            />
        </div>
    </div>
);

export default Header;
