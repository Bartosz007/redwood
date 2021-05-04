import {JSON_FAULT, NETWORK_ERROR_MESSAGE, POST_CONFIG, URL} from "./constans"

export default async function login(email, password) {
    try {

        let login_config = POST_CONFIG;
        login_config.body = JSON.stringify({
            "email": email,
            "password": password
        })

        const response = await fetch(URL + "login", login_config)
        return response.json();


    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}