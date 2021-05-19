import {store} from "../storage/storage";
export {
    isLogged,
    isPermission,
    USER,
    ZBANOWANY,
    MODERATOR,
    ADMIN
}
const USER = "USER"
const ZBANOWANY = "ZBANOWANY"
const MODERATOR = "MODERATOR"
const ADMIN = "ADMIN"

function isLogged(){
    const loginStatus = store.getState().loginStatus;
    return (loginStatus=="true" || loginStatus==true);

}

function isPermission(needed){
    if(isLogged()){
        const permission = store.getState().permission;
        return (permission == needed)
    }else{
        return false;
    }
}