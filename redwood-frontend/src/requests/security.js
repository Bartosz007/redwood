import {POST, securedAjax} from "./basic"

export {
    login,
    register
}

async function login(email, password) {
    const data = {
        "email": email,
        "password": password
    }

    return securedAjax("/login", POST, data)

}

async function register(name, surname, email, password, photo) {

    const data = {
        "email": email,
        "password": password,
        "surname": surname,
        "name": name,
        "image": photo
    }

    return securedAjax("/register", POST, data)

}
