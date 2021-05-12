import {store} from "../storage/storage";

export {
    URL,
    POST_CONFIG,
    DELETE_CONFIG,
    GET_CONFIG,
    PUT_CONFIG,
    NETWORK_ERROR_MESSAGE,
    JSON_FAULT,
    getSecuredConfig,
    getSecuredConfigGET
}


const URL = "http://localhost:8080/";

const HEADER = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const POST_CONFIG = {
    method: 'POST',
    headers: HEADER
};

const DELETE_CONFIG = {
    method: 'DELETE',
    headers: HEADER
};

const GET_CONFIG = {
    method: 'GET',
    headers: HEADER
};

const PUT_CONFIG = {
    method: 'PUT',
    headers: HEADER
};

const NETWORK_ERROR_MESSAGE = {
    "state":false,
    "message":"Problem z połączeniem!"
}

const JSON_FAULT = {
    "state":false,
    "message":"Zły format danych!"
}


function getSecuredConfig(data, TYPE){

    const token = store.getState().token;
    let config = TYPE;
    config.body = JSON.stringify(data)
    config.headers.Authorization = "Bearer "+ token

    return config
}

function getSecuredConfigGET(){

    const token = store.getState().token;
    let config = GET_CONFIG;
    config.headers.Authorization = "Bearer "+ token

    return config
}


