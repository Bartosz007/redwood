import {
    DELETE,
    GET,
    PUT,
    securedAjax
} from "./basic";


export {
    giveWarn,
    getUsers,
    changePermit,
    deleteUser,
    changeColors
}

async function getUsers() {

    return securedAjax("/userList", GET, null)

}

async function giveWarn(idUser) {

    const data = {
        "id": idUser
    }
    return securedAjax("/warn", PUT, data)

}

async function changePermit(permit, idUser) {

    const data = {
        "id": idUser,
        "additionalPayload": permit
    }
    return securedAjax("/changePermit", PUT, data)

}

async function deleteUser(idUser) {

    const data = {
        "id": idUser
    }
    return securedAjax("/deleteUser", DELETE, data)

}

async function changeColors(data) {

    return securedAjax("/saveSettings", PUT, data)

}
