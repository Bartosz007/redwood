import {
    DELETE_CONFIG,
    getSecuredConfig,
    getSecuredConfigGET,
    JSON_FAULT,
    NETWORK_ERROR_MESSAGE,
    POST_CONFIG,
    PUT_CONFIG,
    URL
} from "./constans";


export {
    giveWarn,
    getUsers,
    changePermit,
    deleteUser
}

async function getUsers(){
    try {
        const config = getSecuredConfigGET()

        const response = await fetch(URL + "userList", config)

        if (response.ok) {
            return response.json();
        } else {
            return JSON_FAULT;
        }

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }
}

async function giveWarn(idUser) {
    try {

        const data = {
            "id": idUser
        }

        const config = getSecuredConfig(data, PUT_CONFIG)

        const response = await fetch(URL + "warn", config)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

async function changePermit(permit, idUser){
    try {

        const data = {
            "id": idUser,
            "additionalPayload":permit
        }

        const config = getSecuredConfig(data, PUT_CONFIG)

        const response = await fetch(URL + "changePermit", config)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }
}

async function deleteUser(idUser){
    try {

        const data = {
            "id": idUser
        }

        const config = getSecuredConfig(data, DELETE_CONFIG)

        const response = await fetch(URL + "deleteUser", config)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }
}