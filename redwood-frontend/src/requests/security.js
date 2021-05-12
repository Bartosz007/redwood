import {JSON_FAULT, NETWORK_ERROR_MESSAGE, POST_CONFIG, URL} from "./constans"
export{
    login,
    register
}

async function login(email, password) {
    try {

        let loginConfig = POST_CONFIG;
        loginConfig.body = JSON.stringify({
            "email": email,
            "password": password
        })

        const response = await fetch(URL + "login", loginConfig)
        return response.json();


    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

async function register(name, surname, email, password, photo) {
    try {
        const data = {
            "email": email,
            "password": password,
            "surname": surname,
            "name": name,
            "image": photo
        }
        console.log(data)

        let registerConfig = POST_CONFIG;
        registerConfig.body = JSON.stringify(data)


        const response = await fetch(URL + "register", registerConfig)
        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}