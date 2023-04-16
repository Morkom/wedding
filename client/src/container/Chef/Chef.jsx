import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img
                src={images.chef}
                alt="chef"
            />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Chef's word" />
            <h1 className="headtext__cormorant">What we believe in</h1>
            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <img
                        src={images.quote}
                        alt="qoute"
                    />
                    <p className="p__opensans">
                        Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Etiam Dui Sem, Fermentum Vitae, Sagittis Id, Malesuada In, Quam. Cras Pede
                        Libero, Dapibus Nec.
                    </p>
                </div>
                <p className="p__opensans">
                    Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit. Etiam Dui Sem, Fermentum Vitae, Sagittis Id, Malesuada In, Quam. Cras Pede Libero,
                    Dapibus Nec, Pretium Sit Amet, Tempor Quis. Quisque Tincidunt Scelerisque Libero. Praesent Id Justo In Neque Elementum Ultrices. Integer
                    Tempor. Integer In Sapien. Etiam Quis Quam. Pellentesque Habitant Morbi Tristique Senectus Et Netus Et Malesuada Fames Ac Turpis Egestas.
                    Maecenas Aliquet Accumsan Leo. Aliquam Erat Volutpat. Curabitur Bibendum Justo Non Orci. Praesent Vitae Arcu Tempor Neque Lacinia Pretium.
                </p>
            </div>
            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img
                    src={images.sign}
                    alt="sign"></img>
            </div>
        </div>
    </div>
);

export default Chef;
