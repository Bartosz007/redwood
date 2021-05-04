
import {UserAction, UserActions} from "./userActions";


export const userReducer = (state = null, action:UserAction)=>{

    switch (action.type){
        case UserActions.GET_ALL_USERS:{
            return state;
        }
        case UserActions.GET_USER:{
            return state;
        }


        default:
            return state;
    }
}