import React, {useEffect, useState} from "react";
import LoginForm from "./basic_ingredients/LoginForm";
import RegisterForm from "./basic_ingredients/RegisterForm";
import SettingsPanel from "./basic_ingredients/SettingsPanel";

import {
    addBlockListener,
    addBlockStaticListener,
    addListOfBlockStaticListenersRev,
    addListOfFontListeners,
    refreshBetterColors
} from "../../scripts/betterColors";


function PreLoginSettings(props) {

    const [context, setContext] = useState(<LoginForm hideSettingsMenu={props.hideSettingsMenu}/>);
    const [textOfFirstButton, setTextOfFirstButton] = useState("Zarejestruj się");
    const [textOfSecondButton, setTextOfSecondButton] = useState("Ustawienia");
    const [typeOfFirst, setTypeOfFirst] = useState(true);
    const [typeOfSecond, setTypeOfSecond] = useState(true);


    const firstButtonActions = () => {
        setTypeOfFirst(!typeOfFirst);

        if (typeOfFirst) {
            setContext(<RegisterForm/>);
            setTextOfFirstButton("Zaloguj się");
        } else {
            setContext(<LoginForm hideSettingsMenu={props.hideSettingsMenu}/>);
            setTextOfFirstButton("Zarejestruj się");
        }

        setTextOfSecondButton("Ustawienia");
        setTypeOfSecond(true);
    }

    const secondButtonActions = () => {
        setTypeOfSecond(!typeOfSecond);

        if (typeOfSecond) {
            setContext(<SettingsPanel/>);
            setTextOfSecondButton("Zarejestruj się");
        } else {
            setContext(<RegisterForm/>);
            setTextOfSecondButton("Ustawienia");
        }

        setTextOfFirstButton("Zaloguj się");
        setTypeOfFirst(false);

    }

    useEffect(() => {
        addBlockListener(document.querySelector(".log_reg_button"))
        addBlockListener(document.querySelector(".settings_button"))
        addBlockStaticListener(document.querySelector(".settings_block"))

        addListOfBlockStaticListenersRev(document.querySelectorAll("input"))
        addListOfFontListeners(document.querySelectorAll("input"))

        addListOfBlockStaticListenersRev(document.querySelectorAll("button"))
        addListOfFontListeners(document.querySelectorAll("button"))

        refreshBetterColors()
    })

    return (
        <section className="settings_block">


            <div className="settings_menu">
                <div className="log_reg_button"
                     onClick={firstButtonActions}>{textOfFirstButton}</div>
                <div className="settings_button"
                     onClick={secondButtonActions}>{textOfSecondButton}</div>
            </div>

            {context}

        </section>
    );

}

export default PreLoginSettings;
