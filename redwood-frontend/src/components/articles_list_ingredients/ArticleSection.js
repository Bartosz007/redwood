import React from 'react';
import ArticleShort from "./basic_ingredients/ArticleShort";

function ArticleSection(props) {
    return (
        <section className="article_section">
            <ArticleShort value={props.value}/>
        </section>
    );
}

export default ArticleSection;
