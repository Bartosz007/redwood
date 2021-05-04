import ImageSection from "./ImageSection";
import ArticleSection from "./ArticleSection";
import CommentSection from "./CommentSection";
import React from "react";
import {withRouter} from 'react-router-dom';

class Essay extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            imageSection:null,
            articleSection:null,
            commentSection:null
        }

        fetch(`http://localhost:8080/article/${props.idArticle}`)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                this.setState({
                    loading:false,
                    imageSection:<ImageSection images={result.images}/>,
                    articleSection: <ArticleSection articleData={result}/>,
                    commentSection: <CommentSection comments={result.commments}/>
                })
            })

    }

    render() {

        return(
            <article className="article_entire">
                {this.state.imageSection}
                {this.state.articleSection}
                {this.state.commentSection}
            </article>
        );

    }


}
export default Essay;