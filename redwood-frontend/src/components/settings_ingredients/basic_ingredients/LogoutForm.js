import React, {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import {store} from "../../../storage/storage";
import {useCookies} from "react-cookie";
import {clearCookies} from "../../../scripts/cookiesScripts";
import {setAllStates} from "../../../storage/actions";
import {useHistory} from "react-router-dom";
import {addBlockListener, addBlockStaticListener, refreshBetterColors} from "../../../scripts/betterColors";
import betterAlert from "../../../scripts/betterAlert";

function LogoutForm(props) {

    const dispatch = store.dispatch
    const [cookies, setCookie] = useCookies(['redwood']);

    const history = useHistory();

    useEffect(()=>{
       // addBlockStaticListener(document.querySelector(".settings_block"))
        addBlockListener(document.querySelector(".logout_button"))

        refreshBetterColors()
    })

    const onClick = () =>{
        betterAlert("Wylogowano...");

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
        setTimeout(()=>{
            history.push("/");
            history.go(0);
        },1000)

    }

    return(
        <form className="logout_form">
            <img onClick={onClick} className="logout_button" src="../icons/logout.svg" alt="logout"/>
        </form>
    );

}

export default LogoutForm;