const ACTIONS = {
    SET_ALL_STATES: "SET_ALL_STATES",
    SAVE_CREDENTIALS: "SAVE_CREDENTIALS",
    LOAD_CREDENTIALS : "LOAD_CREDENTIALS",

    HANDLE_LOGIN_MENU: "HANDLE_LOGIN_MENU",
    HANDLE_LOGIN_STATUS: "HANDLE_LOGIN_STATUS",
    GET_ALERT_STATE: "GET_ALERT_STATE",
    SET_ALERT_STATE: "SET_ALERT_STATE"
}

const setAllStates = data => ({
    type: ACTIONS.SET_ALL_STATES,
    data
})


const saveCredentials = data => ({
    type: ACTIONS.SAVE_CREDENTIALS,
    data
})



export{
    ACTIONS,
    setAllStates,
    saveCredentials
}

const getAlertState = () => ({
    type: ACTIONS.GET_ALERT_STATE
})

const setAlertState = item => ({
    type: ACTIONS.HANDLE_LOGIN_MENU,
    item
})
