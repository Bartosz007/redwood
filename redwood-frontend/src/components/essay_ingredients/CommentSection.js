import Comment from "./basic_ingredients/Comment";
import AddComment from "./basic_ingredients/AddComment";
import React from "react";

function CommentSection(props){
    const comments = props.comments
    console.log(comments)
    return(
        <section className="comment_section">
            {
                comments.map(
                    val => <Comment key={val.idComment} value={val}/>
                )
            }
            <AddComment/>
        </section>
    );
}

export default CommentSection;