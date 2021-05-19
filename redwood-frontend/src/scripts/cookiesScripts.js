import {onSaveColors, setAllStates} from "../storage/actions";
import {INITIAL_STATE} from "../storage/reducer"
import {isLogged} from "./permissionScripts";

const LIFE_TIME = 864000; //60 * 60 * 24 * 10 = 10 dni

export {
    loadCookies,
    saveCookies,
    saveColors,
    clearCookies
}

const loadCookies = (cookies, setCookie, dispatch) => {

    /*
        jeśli nie ma ciasteczek ładujemy domyślne
    */

    const loginStatus = isLogged()

    if (Object.keys(cookies).length == 0 && !loginStatus) {
        const data = INITIAL_STATE
        save(setCookie, data);

    }

    saveCookiesInState(dispatch, cookies);
}

const saveCookies = (dispatch, setCookie, data) => {

    save(setCookie, data);
    saveCookiesInState(dispatch, data);

}

const saveColors = (dispatch, setCookie, data) => {
    saveColorsInCookies(setCookie, data)
    dispatch(onSaveColors(data))
}

const clearCookies = (dispatch, setCookie, data) => {

    save(setCookie, data);
    saveCookiesInState(dispatch, data);

}

const saveCookiesInState = (dispatch, data) => {

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

    setCookie("loginStatus", data.loginStatus, {maxAge: LIFE_TIME, path: '/'});
    setCookie("email", data.email, {maxAge: LIFE_TIME, path: '/'});
    setCookie("token", data.token, {maxAge: LIFE_TIME, path: '/'});
    setCookie("permission", data.permission, {maxAge: LIFE_TIME, path: '/'});

    saveColorsInCookies(setCookie, data)

}


const saveColorsInCookies = (setCookie, data) => {

    setCookie("fontColor", data.fontColor, {maxAge: LIFE_TIME, path: '/'});
    setCookie("bgColor", data.bgColor, {maxAge: LIFE_TIME, path: '/'});
    setCookie("fgColor", data.fgColor, {maxAge: LIFE_TIME, path: '/'});

}
