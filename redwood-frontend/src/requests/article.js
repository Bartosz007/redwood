import {
    POST,
    PUT,
    DELETE,
    GET,
    securedAjax, ajax
} from "./basic"


export {
    addArticle,
    deleteArticle,
    getArticle,
    getArticleList,
    getArticleListToVerification,
    verificateArticle,
    addComm,
    delComm
}


async function addArticle(data) {

    return securedAjax("/addArticle", POST, data)

}

async function getArticleList(param) {

    return ajax("/essayList/" + param, null)

}

async function getArticleListToVerification() {

    return securedAjax("/essayList/userArticleMgmtList", GET, null)

}

async function getArticle(param) {

    return ajax("/article/" + param, null)

}

async function deleteArticle(param) {

    const data = {
        "id": param,
    }

    return securedAjax("/deleteArticle", DELETE, data)

}

async function verificateArticle(state, idArticle) {
    const data = {
        "id": idArticle,
        "additionalPayload": state
    }
    return securedAjax("/verification", PUT, data)

}

async function addComm(text, email, idArticle) {

    const data = {
        "email": email,
        "text": text,
        "idArticle": idArticle
    }
    return securedAjax("/addComment", POST, data)

}

async function delComm(idComment) {

    const data = {
        "id": idComment,
    }
    return securedAjax("/deleteComment", DELETE, data)

}
