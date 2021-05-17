import React from 'react';
import { useHistory } from "react-router-dom";
import {deleteArticle} from "../../../requests/article";
import {getCustomAlert} from "../../../scripts/alert";
import {giveWarn} from "../../../requests/user";
import {store} from "../../../storage/storage";

function ArticleShort(props) {
    const data = props.value;
    const icon = data.images.split(",")[0];
    const author = data.user.userData;

    const history = useHistory();
    const permsBasic = store.getState().permission;
    const perms = (permsBasic == "ADMIN") ||  (permsBasic == "MODERATOR")

    const onArticleClick = (e) =>{
        if(e.target.className != "article_action")
            history.push("/article/"+data.idArticle)
    }
    const onArticleDelete = ()=>{
        deleteArticle(data.idArticle).then((data) => {
            let alertBox = getCustomAlert(data.message);
            document.body.append(alertBox)
            history.go(0);
        })
    }
    const onWarnUser = ()=>{
        giveWarn(data.user.idUser).then((data) => {
            let alertBox = getCustomAlert(data.message);
            document.body.append(alertBox)
        })
    }

    return (

        <div className="article" onClick={onArticleClick}>
            <div className="article_image">
                <img src={"../images/"+icon} alt="plant0"/>
            </div>
            <div className="article_content">

                <div className="article_title"><h1>{data.title}</h1>
                </div>

                <div className="article_fragment">{data.text.slice(0,200)}
                </div>

                <div className="article_info">
                    <p>{data.articleType.type}</p>
                    <p>{author.name + " " + author.surname}</p>
                    <p>Data publikacji: <br/> {data.date}</p>
                </div>
                <div className="comment_action">







                {
                    perms ?
                        <img className="article_action"
                             src="../icons/delete.svg"
                             alt="delete"
                             onClick={onArticleDelete}/> :
                        null
                }
                {
                    perms ?
                        <img className="article_action"
                             src="../icons/warn.svg"
                             alt="delete"
                             onClick={onWarnUser}/> :
                        null
                }

                </div>

            </div>
        </div>

    );

}

export default ArticleShort;