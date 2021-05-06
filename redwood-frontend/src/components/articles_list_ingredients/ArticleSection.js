import React from 'react';
import Article from "./basic_ingredients/Article";

function ArticleSection(props) {

    return (
        <section className="article_section">
            <Article value={props.value}/>
        </section>
    );

}

export default ArticleSection;