import React from 'react';
import Article from "./basic_ingredients/Article";

class ArticleSection extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            articlesList: props.data,
            articles: props.data.map(
                article =>
                    <Article
                        articleData={article}
                        key={article.idArticle}
                    />

            )
        }

    };

    render() {
        return (
            <section className="article_section">
                {this.state.articles}
            </section>
        );
    }

}

export default ArticleSection;