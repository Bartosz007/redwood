import React, {useState} from "react";
import LoginForm from "./basic_ingredients/LoginForm";
import LogoutForm from "./basic_ingredients/LogoutForm";
import SettingsPanel from "./basic_ingredients/SettingsPanel";



function PostLoginSettings(props) {
    const [context, setContext] = useState(<LogoutForm hideSettingsMenu={props.hideSettingsMenu}/>);
    const [textOfButton, setTextOfButton] = useState("Ustawienia");
    const [typeOfButton, setTypeOfButton] = useState(true);

    const onButtonAction = () =>{
        setTypeOfButton(!typeOfButton);
        if(typeOfButton){
            setTextOfButton("Wyloguj się")
            setContext(<SettingsPanel/>)
        }else{
            setTextOfButton("Ustawienia")
            setContext(<LogoutForm hideSettingsMenu={props.hideSettingsMenu}/>)
        }
    }

    return (
        <section className="settings_block">

            <div className="settings_menu">
                <div onClick={onButtonAction} className="settings2_button">{textOfButton}</div>
            </div>

            {context}

        </section>
    );
}

export default PostLoginSettings;