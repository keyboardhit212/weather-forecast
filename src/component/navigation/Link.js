import React from "react";
import './Link.css';

export default function Link(props) {

    const {link, url, currentPage, setCurrentPage} = props;

    const activeStyle = {
        background: 'rgba(255, 255, 255, 0.88)',
        borderRadius: '2px',
        boxShadow:  '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(2.4px)',
        color: '#263238',
    }

    return (
        <a className="link" href={url} style={(currentPage === link ? activeStyle : null)} onClick={() => setCurrentPage(link)}>{link}</a>
    );
}