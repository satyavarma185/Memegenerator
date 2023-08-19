import React from "react";

export default function Header() {
    return(
        <header className="header">
            <img src="./Images/logo.png" alt="logo" className="header--logo" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--text">React - Project 3</h4>
        </header>
    )
}