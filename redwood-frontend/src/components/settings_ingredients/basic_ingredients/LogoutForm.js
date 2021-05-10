import React, {useState} from "react";
import LoginForm from "./LoginForm";

function LogoutForm(props) {

    const onClick = () =>{
        //TODO logout
    }

    return(
        <form className="logout_form">
            <img onClick={onClick} className="logout_button" src="../icons/logout.svg" alt="logout"/>
        </form>
    );

}

export default LogoutForm;