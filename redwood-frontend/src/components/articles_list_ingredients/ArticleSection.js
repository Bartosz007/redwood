import React from 'react';
import Article from "./basic_ingredients/Article";

class ArticleSection extends React.Component{


    constructor(props) {
        super(props);
        console.log(this.props.type)
    }

    render() {
        return (
            <section className="article_section">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>

            </section>
        );
    }
}

export default ArticleSection;