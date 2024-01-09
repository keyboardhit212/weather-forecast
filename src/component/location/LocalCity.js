import React from "react";
import './LocalCity.css';
import DateTime from "../../class/DateTime";

export default function LocalCity({name, data}) {
;
    const date = new DateTime(data?.current?.time);

    return (
        <>
            <p className="city-name">{name}</p>
            <p className="date-time">{date.getTime()} / {date.getNameOfDay().toUpperCase()}, {date.getMonth().toUpperCase()} {date.getDay()}</p>
        </>
        
    );
}