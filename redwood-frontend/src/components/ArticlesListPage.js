import React from 'react';
import SearchBar from "./global/SearchBar";
import getArticleList from "../requests/article"

class ArticlesListPage extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            articlesList: null,
            loading: true,
        }

        getArticleList().then((data)=>{
            console.log(data);
        });

    }


    render() {
        return (
            <main className="main_global">
                <SearchBar/>
                {this.state.articlesList}
            </main>
        );
    }


}

export default ArticlesListPage;