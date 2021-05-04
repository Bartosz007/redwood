import {JSON_FAULT, NETWORK_ERROR_MESSAGE, POST_CONFIG, URL} from "./constans"

/*

fetch(`http://localhost:8080/essayList/${this.props.type}`)
            .then(response => response.json())
            .then(result =>{
                this.setState({
                    loading:false,
                    articlesList:<ArticleSection data={result}  />
                })

            })

 */

export default async function getAllArticles() {

    try {

        const response = await fetch(URL + "essayList/essays")

        if (response.ok) {
            return response.json();
        } else {
            return JSON_FAULT;
        }

    } catch (error) {
        return NETWORK_ERROR_MESSAGE;
    }

}

