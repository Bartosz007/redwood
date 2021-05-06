import {ACTIONS} from "./actions"


export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type){
        case ACTIONS.HANDLE_LOGIN_MENU:{
            return { ...state, alertMenu: action.item}
        }
        case ACTIONS.SET_ALERT_STATE:{
            return state
        }
        case ACTIONS.GET_ALERT_STATE:{
            return state
        }

        default:
            return state;
    }
}


const INITIAL_STATE = {
    alertMenu: false,
    alertText: "none",
    loginStatus: false,
    email: null,
    id: null,
    token:null,
    permission: null,
    fontColor: null,
    bgColor: null,
    fgColor: null
}
