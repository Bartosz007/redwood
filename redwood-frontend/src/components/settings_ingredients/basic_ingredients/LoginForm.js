import React, {useState} from "react";
import login from "../../../requests/security"
import {store} from "../../../storage/storage";
import {saveCredentials, showAlert} from "../../../storage/actions";
import {useDispatch} from "react-redux";
import AlertScreen from "../../global/AlertScreen";
import {BrowserRouter as Router} from "react-router-dom";
import {getCustomAlert, changeAlertText} from "../../../scripts/alert"
import {Alert} from "@material-ui/lab";
import {useCookies} from "react-cookie";
import {saveCookies} from "../../../scripts/cookiesScripts";

function LoginForm(props){
    const [email, setEmail] = useState("admin")
    const [password, setPassword] = useState("admin")

    const [cookies, setCookie] = useCookies(['redwood-cookie']);
    const dispatch = store.dispatch



    const onLoginClick =()=>{

        let alertBox = getCustomAlert("Ładowanie...");
        document.body.append(alertBox)

        login(email,password).then((data)=>{

            if(data.status == true){
                const objData = {
                    loginStatus: true,
                    email: data.user.email,
                    token: data.additionalPayload,
                    permission: data.user.userData.permission,
                    fontColor: data.user.userData.userSettings.fontColor,
                    bgColor:  data.user.userData.userSettings.bgColor,
                    fgColor:  data.user.userData.userSettings.fgColor
                }

                saveCookies(dispatch, setCookie, objData);
                console.log(props.hideSettingsMenu)
                props.hideSettingsMenu(this);

            }

            changeAlertText(data.message)
        });

    }

    return(
        <form className="login_form">
            <input value={email} onChange={e=>setEmail(e.target.value)} name="email" type="email" placeholder="Email"/>
            <input value={password} onChange={e=>setPassword(e.target.value)} name="password" type="password" placeholder="Hasło"/>
            <button onClick={onLoginClick} type="button">Zaloguj</button>

        </form>
    );

}

export default LoginForm;