import React from "react";
import {Link} from "react-router-dom";

function MenuButtons(){
    return (
        <header>
            <Link to="/">Start</Link>
            <Link to="/essayList">Eseje</Link>
            <Link to="/crossList">Krzyżówki</Link>
            <Link to="/userArticlesList">Wasze artytuły</Link>
        </header>
    );
}



export default MenuButtons;