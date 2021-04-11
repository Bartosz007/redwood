import ImageSection from "./ImageSection";
import ArticleSection from "./ArticleSection";
import CommentSection from "./CommentSection";
import React from "react";

function Essay(){
    return(
        <article className="article_entire">
            <ImageSection/>
            <ArticleSection/>
            <CommentSection/>
        </article>
    );
}
export default Essay;