import React from "react";

import { images } from "../../constants";
import MapC from "../../components/Map/MapC";
import "./AboutUs.css";

const AboutUs = () => (
        <MapC   onWheel={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onTouchStart={(e) => e.preventDefault()}/>
  
);

export default AboutUs;
