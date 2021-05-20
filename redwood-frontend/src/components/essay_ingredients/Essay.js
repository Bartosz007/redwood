import React, {useEffect, useState} from "react";
import {getArticle} from "../../requests/article";
import ImageSection from "./ImageSection";
import ArticleSection from "./ArticleSection";
import CommentSection from "./CommentSection";
import {refreshBetterColors} from "../../scripts/betterColors";

function Essay(params) {
    const id = params.idArticle;
    const [loading, setLoading] = useState(false);

    const [imageSection, setImageSection] = useState()
    const [articleSection, setArticleSection] = useState()
    const [commentSection, setCommentSection] = useState()

    if (!loading) {

        getArticle(id).then((data) => {
            setImageSection(<ImageSection images={data.images} type={data.articleType.type}/>)
            setArticleSection(<ArticleSection articleData={data}/>)
            setCommentSection(<CommentSection comments={data.comments}/>)

            setLoading(true);
        });

    }
    useEffect(() => {
        refreshBetterColors()
    }, [articleSection])

    return (

        <article className="article_entire">
            {loading ? imageSection : null}
            {loading ? articleSection : null}
            {loading ? commentSection : null}
        </article>

    );
}

export default Essay;
