
const LIFE_TIME = 864000; //60 * 60 * 24 * 10 = 10 dni

export const loadCookies = (cookies, setCookie) =>{
    console.log(cookies);
    console.log(Object.keys(cookies));
    if(Object.keys(cookies).length == 0){
        setCookie("loginStatus", false, {maxAge: LIFE_TIME});
        setCookie("email", null, {maxAge: LIFE_TIME});
        setCookie("token", null, {maxAge: LIFE_TIME});
        setCookie("permission", null, {maxAge: LIFE_TIME});
        setCookie("fontColor", "value", {maxAge: LIFE_TIME});
        setCookie("bgColor", "value", {maxAge: LIFE_TIME});
        setCookie("fgColor", "value", {maxAge: LIFE_TIME});
    }
}
