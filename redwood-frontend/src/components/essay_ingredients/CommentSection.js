import Comment from "./basic_ingredients/Comment";
import AddComment from "./basic_ingredients/AddComment";
import React, {useState} from "react";
import {store} from "../../storage/storage";

function CommentSection(props){
    const comments = props.comments


    let loginStatus = store.getState().loginStatus ;
    let perms = store.getState().permission
    const commState = ((loginStatus == "true") || (loginStatus == true)) && (perms != "ZBANOWANY")

    return(
        <section className="comment_section">
            {
                comments.map(
                    val => <Comment key={val.idComment} value={val}/>
                )
            }

            {commState ?
                <AddComment/> :
                null
            }

        </section>
    );
}

export default CommentSection;