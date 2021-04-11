import React from 'react';
import MgmtArticle from "./basic_ingredients/MgmtArticle";

class MgmtArticleSection extends React.Component{
    render() {
        return (
            <section className="article_section">
                <MgmtArticle/>
                <MgmtArticle/>
                <MgmtArticle/>
                <MgmtArticle/>
                <MgmtArticle/>
                <MgmtArticle/>
                <MgmtArticle/>

            </section>
        );
    }
}

export default MgmtArticleSection;