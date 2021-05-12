import React, {useState} from "react";
import LoginForm from "./LoginForm";
import {getCustomAlert} from "../../../scripts/alert";
import {store} from "../../../storage/storage";
import {useCookies} from "react-cookie";
import {clearCookies} from "../../../scripts/cookiesScripts";
import {setAllStates} from "../../../storage/actions";
import {useHistory} from "react-router-dom";

function LogoutForm(props) {

    const dispatch = store.dispatch
    const [cookies, setCookie] = useCookies(['redwood-cookie']);

    const history = useHistory();

    const onClick = () =>{
        let alertBox = getCustomAlert("Wylogowano...");
        document.body.append(alertBox);

        const data = {
            loginStatus: false,
            email: null,
            token: null,
            permission: null,
            fontColor: cookies.fontColor,
            bgColor: cookies.bgColor,
            fgColor: cookies.fgColor
        }

        clearCookies(dispatch, setCookie, data);

        //props.hideSettingsMenu();
        history.go(0);
    }

    return(
        <form className="logout_form">
            <img onClick={onClick} className="logout_button" src="../icons/logout.svg" alt="logout"/>
        </form>
    );

}

export default LogoutForm;