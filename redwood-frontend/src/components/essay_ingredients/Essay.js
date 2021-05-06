import React, {useState} from "react";
import {getArticle} from "../../requests/article";
import ImageSection from "./ImageSection";
import ArticleSection from "./ArticleSection";
import CommentSection from "./CommentSection";

function Essay(params) {
    const id = params.idArticle;

    const [loading, setLoading] = useState(false);

    const [imageSection, setImageSection] = useState()
    const [articleSection, setArticleSection] = useState()
    const [commentSection, setCommentSection] = useState()

    if (!loading) {

        getArticle(id).then((data) => {
            setLoading(true);
            setImageSection(<ImageSection images={data.images}/>)
            setArticleSection(<ArticleSection articleData={data}/>)
            setCommentSection(<CommentSection comments={data.comments}/>)

        });

    }

    return (

        <article className="article_entire">
            { loading?imageSection : null }
            { loading?articleSection : null }
            { loading?commentSection : null }
        </article>

    );

}

export default Essay;