let alertScreen;
let alertMessage;
let alert = null;
let alertStatus = false;

function betterAlert(text){
    console.log(text)
    if(alertStatus){
        remove()
    }

    alert = getAlertContext(text)
    alert.onclick = remove
    document.body.append(alert)
    alertStatus = true;

}

function getAlertContext(text){
    alertScreen = document.createElement('div');
    alertScreen.className = "alert_screen";

    alertMessage= document.createElement('h3');
    alertMessage.className = "alert_message";
    alertMessage.textContent = text;

    alertScreen.appendChild(alertMessage);

    return alertScreen;

}

const remove = () =>{
    alert.remove();
}

export default betterAlert