import Comment from "./basic_ingredients/Comment";
import AddComment from "./basic_ingredients/AddComment";
import React, {useEffect, useState} from "react";
import {store} from "../../storage/storage";
import {addListOfBlockListeners, refreshBetterColors} from "../../scripts/betterColors";
import {isLogged, isPermission, ZBANOWANY} from "../../scripts/permissionScripts";

function CommentSection(props){
    const comments = props.comments

    const permission = isLogged() && !isPermission(ZBANOWANY)

    return(
        <section className="comment_section">
            {
                comments.map(
                    val => <Comment key={val.idComment} value={val}/>
                )
            }

            {permission ?
                <AddComment/> :
                null
            }

        </section>
    );
}

export default CommentSection;