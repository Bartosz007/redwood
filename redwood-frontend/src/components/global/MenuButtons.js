import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function MenuButtons(){
    return (
        <header>
            <Link to="/">Start</Link>
            <Link to="/essey">Eseje</Link>
            <Link to="/guides">Poradniki</Link>
            <Link to="/share">Pochwal się</Link>
            <Link to="/about">O mnie</Link>
        </header>
    );
}



export default MenuButtons;