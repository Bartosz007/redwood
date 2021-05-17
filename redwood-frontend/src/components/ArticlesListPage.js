import React, {useEffect, useState} from 'react';
import SearchBar from "./global/SearchBar";
import ArticleSection from "./articles_list_ingredients/ArticleSection";
import {getArticleList} from "../requests/article"
import AddArticleSection from "./articles_list_ingredients/AddArticleSection";

function ArticlesListPage(props) {

    const listType = props.type
    const [articleList, setArticleList] = useState();
    const [loading, setLoading] = useState(false);

    if (!loading) {

        getArticleList(listType).then((data) => {
            setArticleList(data);
            setLoading(true);
        });

    }

    return (
        <main className="main_global">

            {
                loading ?
                articleList.map(
                    val => <ArticleSection key={val.idArticle} value={val}/>
                    )
                : null
            }

            <AddArticleSection/>
        </main>
    );

}

export default ArticlesListPage;