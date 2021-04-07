import React from 'react';



import Search from "./global/SearchBar";
import MgmtArticleSection from "./articles_list_ingredients/MgmtArticleSection";

class ArticlesListMgmtPage extends React.Component{
    render() {
        return (
            <main className="main_global">
                <Search/>
                <MgmtArticleSection/>
            </main>
        );
    }
}

export default ArticlesListMgmtPage;