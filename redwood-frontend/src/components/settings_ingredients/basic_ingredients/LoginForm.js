import React, {useState} from "react";
import {login} from "../../../requests/security"
import {store} from "../../../storage/storage";
import {saveCredentials, showAlert} from "../../../storage/actions";
import {useDispatch} from "react-redux";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
import betterAlert from "../../../scripts/betterAlert"
import {Alert} from "@material-ui/lab";
import {useCookies} from "react-cookie";
import {saveCookies} from "../../../scripts/cookiesScripts";

function LoginForm(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [cookies, setCookie] = useCookies(['redwood']);
    const dispatch = store.dispatch

    const history = useHistory();

    const onLoginClick =()=>{

        betterAlert("Ładowanie...")

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
                props.hideSettingsMenu(this);

                betterAlert("Zalogowano pomyślnie!")

                setTimeout(()=>{
                    history.go(0);
                },500)

            }else{
                betterAlert("Błędne hasło i/lub login!")
            }


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