import {JSON_FAULT, NETWORK_ERROR_MESSAGE, POST_CONFIG, URL} from "./constans"


export async function getArticleList(param) {

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

export async function getArticle(param) {

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
