import React from 'react';
import {useHistory} from "react-router-dom";
import {deleteArticle} from "../../../requests/article";
import {giveWarn} from "../../../requests/user";
import betterAlert from "../../../scripts/betterAlert";
import {ADMIN, MODERATOR, isPermission} from "../../../scripts/permissionScripts";

function ArticleShort(props) {
    const data = props.value;
    const icon = data.images.split(",")[0];
    const author = data.user.userData;

    const history = useHistory();
    const permission = isPermission(ADMIN) || isPermission(MODERATOR)

    const onArticleClick = (e) => {
        if (e.target.className != "article_action")
            history.push("/article/" + data.idArticle)
    }

    const onArticleDelete = () => {
        deleteArticle(data.idArticle).then((data) => {
            betterAlert(data.message);
            setTimeout(() => {
                history.go(0);
            }, 500)
        })
    }

    const onWarnUser = () => {
        giveWarn(data.user.idUser).then((data) => {
            betterAlert(data.message);
        })
    }

    return (

        <div className="article" onClick={onArticleClick}>
            <div className="article_image">
                <img src={"../images/" + icon} alt="plant0"/>
            </div>
            <div className="article_content">

                <div className="article_title">
                    <h1 className="title_text">{data.title}</h1>
                </div>

                <div className="article_fragment">{data.text.slice(0, 200)}
                </div>

                <div className="article_info">
                    <p className="article_p">{data.articleType.type}</p>
                    <p className="article_p">{author.name + " " + author.surname}</p>
                    <p className="article_p">Data publikacji: <br/> {data.date}</p>
                </div>
                <div className="comment_action">


                    {
                        permission ?
                            <img className="article_action"
                                 src="../icons/delete.svg"
                                 alt="delete"
                                 onClick={onArticleDelete}/> :
                            null
                    }
                    {
                        permission ?
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
