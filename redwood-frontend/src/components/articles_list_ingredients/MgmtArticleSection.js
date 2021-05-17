import React, {useState} from 'react';
import MgmtArticle from "./basic_ingredients/MgmtArticle";
import {getArticleListToVerification} from "../../requests/article";
import ArticleShort from "./AddArticleSection";
import AddArticleSection from "./AddArticleSection";

function MgmtArticleSection() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    getArticleListToVerification().then((data) => {
        setData(data);
        setLoading(true)
    })

    return (
        <section className="article_section">
            {
                loading ?
                    data.map(
                        val => <MgmtArticle key={val.idArticle} value={val}/>
                    ) :
                    null
            }
        </section>
    );

}

export default MgmtArticleSection;