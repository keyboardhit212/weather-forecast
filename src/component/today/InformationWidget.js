import React from "react";
import './InformationWidget.css';

export default function InformationWidget(props) {

    const {icon, label, result} = props;

    return (
        <>
            <img src={icon}/>
            <span className="span-container">
                <span>{label}&nbsp;</span>
                <span>{result}</span>
            </span>
            
        </>
            
    );
}