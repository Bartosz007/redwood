import {ACTIONS} from "./actions"


export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type){
        case ACTIONS.SET_ALL_STATES:{
            return action.data
        }
        case ACTIONS.LOAD_CREDENTIALS:{
            return state
        }
        case ACTIONS.SAVE_CREDENTIALS:{
            return { ...state, alertMenu:false }
        }

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


export const INITIAL_STATE = {
    loginStatus: false,
    email: null,
    token:null,
    permission: null,
    fontColor: "rgba(0,0,0,1)",
    bgColor: "rgba(255,255,255,0.7)",
    fgColor: "rgba(255,255,255,0.5)"
}
