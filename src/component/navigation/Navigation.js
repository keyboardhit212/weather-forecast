import React, {useState} from "react";
import './Navigation.css';
import Link from "./Link";

export default function Navigation(props) {

    return (
        <div className="navigation">
            <Link link="Today" url="#" {...props}/>
            <Link link="Tomorrow" url="#" {...props}/>
            <Link link="7 Day" url="#" {...props}/>
            <Link link="14 Day" url="#" {...props}/>
        </div>
    );
}