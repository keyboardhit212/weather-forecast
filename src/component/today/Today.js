import React from "react";
import './Today.css';
import DateTime from "../../class/DateTime";
import InformationPanel from "./InformationPanel";
import LocalCity from "../location/LocalCity";

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
            <p className="city-name">Bacolod</p>
            </div>
        </div>
    )
}