import {store} from "../storage/storage";

export {
    URL,
    POST,
    DELETE,
    GET,
    PUT,
    NETWORK_ERROR_MESSAGE,
    JSON_FAULT,
    securedAjax,
    ajax
}


const URL = "http://localhost:8080";

const HEADER = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const POST = {
    method: 'POST',
    headers: HEADER
};

const DELETE = {
    method: 'DELETE',
    headers: HEADER
};

const GET = {
    method: 'GET',
    headers: HEADER
};

const PUT = {
    method: 'PUT',
    headers: HEADER
};

const NETWORK_ERROR_MESSAGE = {
    "state": false,
    "message": "Problem z połączeniem!"
}

const JSON_FAULT = {
    "state": false,
    "message": "Zły format danych!"
}


function getSecuredConfig(data, method) {

    const token = getToken();

    if (data != null)
        method.body = JSON.stringify(data)

    method.headers.Authorization = "Bearer " + token

    return method
}

function getToken() {
    return store.getState().token
}


async function securedAjax(path, method, data) {

    try {

        const config = getSecuredConfig(data, method)

        const response = await fetch(URL + path, config)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

async function ajax(path) {

    try {

        const response = await fetch(URL + path)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}
