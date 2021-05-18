import React, {useEffect, useState} from "react";

import LoginForm from "./basic_ingredients/LoginForm";
import RegisterForm from "./basic_ingredients/RegisterForm";
import SettingsPanel from "./basic_ingredients/SettingsPanel";
import {store} from "../../storage/storage";
import PreLoginSettings from "./PreLoginSettings";
import PostLoginSettings from "./PostLoginSettings";
import {
    addBlockListener,
    addListOfBlockListeners,
    addListOfBlockStaticListenersRev, addListOfFontListeners,
    refreshBetterColors
} from "../../scripts/betterColors";

function Settings(props) {

    const loginStatus = store.getState().loginStatus
    const login = (loginStatus == "true" || loginStatus == true)
    useEffect(()=>{
        //  addListOfBlockListeners(document.querySelector("header").childNodes)
      //  addListOfBlockListeners(document.querySelectorAll("input"))


        refreshBetterColors()
       // addBlockListener(document.querySelector(".logout_form"))
    })
    return (
        <div className="settings_container" onClick={props.hideSettingsMenu}>
            {
                login?
                    <PostLoginSettings hideSettingsMenu={props.hideSettingsMenu}/>
                    :
                    <PreLoginSettings hideSettingsMenu={props.hideSettingsMenu}/>
            }

        </div>
    );

}

export default Settings;