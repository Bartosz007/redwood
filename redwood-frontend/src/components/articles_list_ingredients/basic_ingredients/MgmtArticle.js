import React, {useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import {verificateArticle} from "../../../requests/article";
import {getCustomAlert} from "../../../scripts/alert";
import {
    addBlockListener,
    addFontListener, addListOfBlockStaticListenersRev,
    addListOfFontListeners,
    refreshBetterColors
} from "../../../scripts/betterColors";


function MgmtArticle(props) {
    const data = props.value
    const image = data.images.split(",")[0];
    const user = data.user.userData
    const history = useHistory();

    const verificationArticle = (state) =>{
        verificateArticle(state, data.idArticle).then((data) =>{
            let alertBox = getCustomAlert(data.message);
            document.body.append(alertBox)
        })
    }

    const acceptArticle = () =>{
        verificationArticle(true)
    }

    const denyArticle = () =>{
        verificationArticle(false)
    }

    const goToArticle = () =>{
        history.push(`/article/${data.idArticle}`)
    }

    useEffect(()=>{
        addBlockListener(document.querySelector(".article"))
        addFontListener(document.querySelector("h1"))
        addFontListener(document.querySelector(".article_fragment"))
        addListOfFontListeners(document.querySelectorAll("p"))
        addListOfFontListeners(document.querySelectorAll("a"))

        refreshBetterColors();
    },[0])

    return (
        <div className="article">
            <div className="article_image">
                <img src={"../images/"+image} alt="{image}"/>
            </div>
            <div className="article_content">
                <div className="article_title"><h1>{data.title}</h1>
                </div>
                <div className="article_fragment">{data.title.slice(0,200)}
                </div>
                <div className="article_info">
                    <p>{data.articleType.type}</p>
                    <p>Autor: {user.name + " " + user.surname}</p>
                    <p>Data publikacji: {data.date}</p>
                </div>
            </div>
            <div className="article_action">
                <div onClick={goToArticle} className="action_button">
                    <a href="#">Przeglądaj</a>
                </div>
                <div onClick={acceptArticle} className="action_button">
                    <a href="#">Zatwierdź</a>
                </div>
                <div onClick={denyArticle} className="action_button">
                    <a href="#">Usuń</a>
                </div>
            </div>
        </div>
    );

}

export default MgmtArticle;