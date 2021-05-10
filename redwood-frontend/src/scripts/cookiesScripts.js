import {setAllStates} from "../storage/actions";
import  {INITIAL_STATE} from "../storage/reducer"
const LIFE_TIME = 864000; //60 * 60 * 24 * 10 = 10 dni

export {
    loadCookies,
    saveCookies,
    clearCookies
}

const loadCookies = (cookies, setCookie, dispatch) =>{

    /*
        jeśli nie ma ciasteczek ładujemy domyślne
    */
    if(Object.keys(cookies).length == 0) {

        const data = INITIAL_STATE
        save(setCookie, data);

    }
    saveCookiesInState(dispatch, cookies);
}

const saveCookies = (dispatch, setCookie, data) =>{

    save(setCookie, data);
    saveCookiesInState(dispatch, data);
}

const clearCookies = (dispatch, setCookie, data) => {

    console.log(data)
    save(setCookie, data);
    saveCookiesInState(dispatch, data);
}

const saveCookiesInState = (dispatch, data) =>{

    const newStore = {
        loginStatus: data.loginStatus,
        email: data.email,
        token: data.token,
        permission: data.permission,
        fontColor: data.fontColor,
        bgColor: data.bgColor,
        fgColor: data.fgColor
    }
    dispatch(setAllStates(newStore))
}

const save = (setCookie, data) => {
    setCookie("loginStatus", data.loginStatus, {maxAge: LIFE_TIME});
    setCookie("email", data.email, {maxAge: LIFE_TIME});
    setCookie("token", data.token, {maxAge: LIFE_TIME});
    setCookie("permission", data.permission, {maxAge: LIFE_TIME});
    setCookie("fontColor", data.fontColor, {maxAge: LIFE_TIME});
    setCookie("bgColor", data.bgColor, {maxAge: LIFE_TIME});
    setCookie("fgColor", data.fgColor, {maxAge: LIFE_TIME});
}
