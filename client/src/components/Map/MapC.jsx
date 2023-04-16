import React from "react";
import { Map, MarkerLayer, Marker, MouseControl } from "react-mapycz";
import { images } from "../../constants";
import "../../container/AboutUs/AboutUs.css";
import "./MapC.css";

const MapC = () => (



    <div
        className="app__aboutus flex__center section__padding" id="about">

        <div className="app__maps">
            <div className="map_container">
                <h3 className="p__cormorant">Obřad</h3>
                <div className="mappp">
                <Map               
                    height="50vh"
                    zoom={17}
                    center={{ lat: 49.46128, lng: 18.14719 }}>
                    <MouseControl
                        zoom={true}
                        pan={true}
                        wheel={true}
                    />
                    <MouseControl zoom={true} pan={true} wheel={false} />
                    <MarkerLayer>
                        <Marker coords={{ lat: 49.46128, lng: 18.14719 }} />
                    </MarkerLayer>
                </Map>
                </div>
            </div>
            <div className="map_container">
                <h1 className="p__cormorant">Párty</h1>
                <div className="mappp">
                <Map
                    height="50vh"
                    zoom={17}
                    center={{ lat: 49.4461975, lng: 18.2199086 }}>
                    <MouseControl zoom={true} pan={true} wheel={true}
                    />
                    <MarkerLayer>
                        <Marker coords={{ lat: 49.4461975, lng: 18.2199086 }} />
                    </MarkerLayer>
                </Map>
                </div>
            </div>
        </div>
    </div>
);

export default MapC;
