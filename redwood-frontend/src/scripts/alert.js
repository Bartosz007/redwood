import {hideAlert} from "../storage/actions";

let alertScreen;
let alertMessage;
export function getCustomAlert(text){
    alertScreen = document.createElement('div');
    alertScreen.onclick = removeAlert
    alertScreen.className = "alert_screen";

    alertMessage= document.createElement('h3');
    alertMessage.className = "alert_message";
    alertMessage.textContent = text;

    alertScreen.appendChild(alertMessage);

    return alertScreen;

}

export function changeAlertText(text){
    alertMessage.textContent = text;
}

const removeAlert = () =>{
    alertScreen.remove();
}