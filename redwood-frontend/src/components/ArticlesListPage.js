import React from 'react';
import SearchBar from "./global/SearchBar";
import ArticleSection from "./articles_list_ingredients/ArticleSection";

class ArticlesListPage extends React.Component{
    render() {
        return (
            <main className="main_global">
                <SearchBar/>
                <ArticleSection />
            </main>
        );
    }
}

export default ArticlesListPage;