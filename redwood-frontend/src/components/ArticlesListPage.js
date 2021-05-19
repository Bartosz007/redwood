import React, {useEffect, useState} from 'react';
import SearchBar from "./global/SearchBar";
import ArticleSection from "./articles_list_ingredients/ArticleSection";
import {getArticleList} from "../requests/article"
import AddArticleSection from "./articles_list_ingredients/basic_ingredients/AddArticleSection";
import {
    addFontListener,
    addListenerToBetterColors, addListOfBlockListeners, addListOfFontListeners,
    addListOfListenersToBetterColors,
    refreshBetterColors
} from "../scripts/betterColors";
import {store} from "../storage/storage";

function ArticlesListPage(props) {

    const listType = props.type
    const [articleList, setArticleList] = useState();
    const [loading, setLoading] = useState(false);

    const loginStatus = (store.getState().loginStatus==true || store.getState().loginStatus=="true")
        && store.getState().permission != "ZBANOWANY"

    if (!loading) {

        getArticleList(listType).then((data) => {
            setArticleList(data);
            setLoading(true);
        });

    }

    useEffect(() => {
        addListOfBlockListeners(document.querySelectorAll(".article"))
        addListOfFontListeners(document.querySelectorAll(".article_fragment"))

        addListOfFontListeners(document.querySelectorAll(".title_text"))
        addListOfFontListeners(document.querySelectorAll(".article_p"))
        refreshBetterColors()
    },[loading])


    return (
        <main className="main_global">

            {
                loading ?
                    articleList.map(
                        val => <ArticleSection key={val.idArticle} value={val}/>
                    )
                    : null
            }

            {
                loginStatus ?
                    <AddArticleSection/> :
                    null
            }
        </main>
    );

}

export default ArticlesListPage;