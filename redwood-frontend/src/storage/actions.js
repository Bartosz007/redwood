
 const ACTIONS = {
    HANDLE_LOGIN_MENU : "HANDLE_LOGIN_MENU",
    HANDLE_LOGIN_STATUS : "HANDLE_LOGIN_STATUS",
    GET_ALERT_STATE : "GET_ALERT_STATE",
    SET_ALERT_STATE : "SET_ALERT_STATE"
}

 const getAlertState = () =>({
    type: ACTIONS.GET_ALERT_STATE
})

 const setAlertState = item =>({
    type: ACTIONS.HANDLE_LOGIN_MENU,
    item
})


 export{
    ACTIONS,
    getAlertState,
    setAlertState
}
