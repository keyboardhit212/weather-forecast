import React from "react";
import './Today.css';
import DateTime from "../../class/DateTime";
import InformationPanel from "./InformationPanel";
import LocalCity from "../location/LocalCity";
import WeatherStatus from "../weather/WeatherStatus";

export default function Today(props) {

    const {data, name} = props;
    const date = new DateTime(data?.current?.time);

    return (
        <div className="today">
            <div className="left-container">
                <LocalCity {...props}/>
                <InformationPanel {...props}/>
            </div>
            <div className="right-container">
                <WeatherStatus {...props}/>
            </div>
        </div>
    )
}