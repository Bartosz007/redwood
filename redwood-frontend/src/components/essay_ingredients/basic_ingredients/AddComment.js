import {addComm, getArticleList} from "../../../requests/article";
import {useCookies} from "react-cookie";
import React, {useEffect, useState} from "react";
import {getCustomAlert} from "../../../scripts/alert";
import {useHistory} from "react-router-dom";
import {
    addBlockListener,
    addBlockStaticListener,
    addFontListener,
    refreshBetterColors
} from "../../../scripts/betterColors";

function AddComment(){
    const [cookies, setCookie] = useCookies(['redwood-cookie']);
    const [text, setText] = useState("");
    const history = useHistory();

    useEffect(() => {
        addBlockStaticListener(document.querySelector(".new_comment_text"))
        addFontListener(document.querySelector(".new_comment_text"))
        addBlockListener(document.querySelector(".add_comment_button"))
        refreshBetterColors()
    })

    const addComment = () =>{

        if(text.length > 5){
            let alertBox = getCustomAlert("Dodawanie komentarza...");
            document.body.append(alertBox)
            const path = history.location.pathname.split("/")[2]
            addComm(text, cookies.email, path).then((data) => {
                history.go(0);
            });
        }else{
            let alertBox = getCustomAlert("Komentarz jest za krótki!");
            document.body.append(alertBox)
        }

    }

    return(
        <div className="add_comment">
            <form>
                <textarea name="new_comment_text" className="new_comment_text"
                          value={text} onChange={e=>setText(e.target.value)}
                          required maxLength="2000"></textarea>
                <button
                    type="button"
                    onClick={addComment}
                    className="add_comment_button">
                    Dodaj
                </button>
            </form>
        </div>
    );
}

export default AddComment;