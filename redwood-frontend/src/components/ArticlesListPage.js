import React from 'react';
import SearchBar from "./global/SearchBar";
import ArticleSection from "./articles_list_ingredients/ArticleSection";

class ArticlesListPage extends React.Component{


    constructor(props) {
        super(props);
        this.loadArticles()
    }

    loadArticles = () =>{
    /*    fetch(`localhost:8080/${this.props.type}`)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
            })*/
    }

    render() {
        return (
            <main className="main_global">
                <SearchBar/>
                <ArticleSection type={this.props.type} />
            </main>
        );
    }


}

export default ArticlesListPage;