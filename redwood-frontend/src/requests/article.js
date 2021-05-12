import {
    DELETE_CONFIG,
    getSecuredConfig, getSecuredConfigGET,
    JSON_FAULT,
    NETWORK_ERROR_MESSAGE,
    POST_CONFIG,
    POST_SECURED_CONFIG, PUT_CONFIG,
    TOKEN,
    URL
} from "./constans"
import {store} from "../storage/storage";

export {
    getArticleList,
    getArticle,
    addComm,
    delComm,
    getArticleListToVerification,
    verificateArticle
}


async function getArticleList(param) {

    try {

        const response = await fetch(URL + "essayList/" + param)

        if (response.ok) {
            return response.json();
        } else {
            return JSON_FAULT;
        }

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

async function getArticleListToVerification(){

    try {
        const config = getSecuredConfigGET()

        const response = await fetch(URL + "essayList/userArticleMgmtList",config)

        if (response.ok) {
            return response.json();
        } else {
            return JSON_FAULT;
        }

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }
}

async function getArticle(param) {

    try {

        const response = await fetch(URL + "article/" + param)

        if (response.ok) {
            return response.json();
        } else {
            return JSON_FAULT;
        }

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

async function verificateArticle(state, idArticle){

    try {

        const data = {
            "id": idArticle,
            "additionalPayload":state
        }

        const config = getSecuredConfig(data, PUT_CONFIG)

        const response = await fetch(URL + "verification", config)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

async function addComm(text, email,idArticle) {

    try {

        const data = {
            "email": email,
            "text": text,
            "idArticle": idArticle
        }

        const config = getSecuredConfig(data, POST_CONFIG)

        const response = await fetch(URL + "addComment", config)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

async function delComm(idComment) {

    try {

        const data = {
            "id": idComment,
        }

        const config = getSecuredConfig(data, DELETE_CONFIG)
        console.log(config)
        const response = await fetch(URL + "deleteComment", config)

        return response.json();

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}



