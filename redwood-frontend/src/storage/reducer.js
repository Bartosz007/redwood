import {ACTIONS} from "./actions"

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTIONS.SET_ALL_STATES: {
            return action.data
        }
        case ACTIONS.LOAD_CREDENTIALS: {
            return state
        }
        case ACTIONS.SAVE_CREDENTIALS: {
            return {...state, alertMenu: false}
        }

        case ACTIONS.ON_SAVE_COLORS: {
            return {
                ...state,
                fontColor: action.data.fontColor,
                fgColor: action.data.fgColor,
                bgColor: action.data.bgColor
            }
        }

        default:
            return state;
    }

}

export const INITIAL_STATE = {
    loginStatus: false,
    email: null,
    token: null,
    permission: null,
    fontColor: "rgba(0,0,0,1)",
    bgColor: "rgba(255,255,255,0.7)",
    fgColor: "rgba(255,255,255,0.5)"
}
