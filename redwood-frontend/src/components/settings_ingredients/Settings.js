import React, {useEffect} from "react";

import PreLoginSettings from "./PreLoginSettings";
import PostLoginSettings from "./PostLoginSettings";
import {refreshBetterColors} from "../../scripts/betterColors";
import {isLogged} from "../../scripts/permissionScripts";

function Settings(props) {

    const loginStatus = isLogged()

    useEffect(() => {
        refreshBetterColors()
    })

    return (
        <div className="settings_container" onClick={props.hideSettingsMenu}>
            {
                loginStatus ?
                    <PostLoginSettings hideSettingsMenu={props.hideSettingsMenu}/>
                    :
                    <PreLoginSettings hideSettingsMenu={props.hideSettingsMenu}/>
            }

        </div>
    );

}

export default Settings;
