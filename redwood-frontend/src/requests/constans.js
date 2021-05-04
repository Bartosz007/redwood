export const URL = "http://localhost:8080/";

export const POST_CONFIG = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
};

export const NETWORK_ERROR_MESSAGE = {
    "state":false,
    "message":"Error with connection!"
}
export const JSON_FAULT = {
    "state":false,
    "message":"Wrong data format!"
}