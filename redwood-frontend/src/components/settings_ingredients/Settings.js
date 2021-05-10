import React, {useEffect, useState} from "react";

import LoginForm from "./basic_ingredients/LoginForm";
import RegisterForm from "./basic_ingredients/RegisterForm";
import SettingsPanel from "./basic_ingredients/SettingsPanel";
import {store} from "../../storage/storage";
import PreLoginSettings from "./PreLoginSettings";
import PostLoginSettings from "./PostLoginSettings";

function Settings(props) {

    const loginStatus = store.getState().loginStatus

    return (
        <div className="settings_container" onClick={props.hideSettingsMenu}>
            {
                loginStatus?
                    <PostLoginSettings hideSettingsMenu={props.hideSettingsMenu}/>
                    :
                    <PreLoginSettings hideSettingsMenu={props.hideSettingsMenu}/>
            }

        </div>
    );

}

export default Settings;