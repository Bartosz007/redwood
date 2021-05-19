import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {verificateArticle} from "../../../requests/article";
import {
    addListOfBlockListeners,
    addListOfFontListeners,
    refreshBetterColors
} from "../../../scripts/betterColors";
import betterAlert from "../../../scripts/betterAlert";


function MgmtArticle(props) {
    const data = props.value
    const image = data.images.split(",")[0];
    const user = data.user.userData
    const history = useHistory();

    const verificationArticle = (state) => {
        verificateArticle(state, data.idArticle).then((data) => {
            betterAlert(data.message);
        })
    }

    const acceptArticle = () => {
        verificationArticle(true)
    }

    const denyArticle = () => {
        verificationArticle(false)
    }

    const goToArticle = () => {
        history.push(`/article/${data.idArticle}`)
    }

    useEffect(() => {
        addListOfBlockListeners(document.querySelectorAll(".article"))
        addListOfFontListeners(document.querySelectorAll("h1"))
        addListOfFontListeners(document.querySelectorAll(".article_fragment"))
        addListOfFontListeners(document.querySelectorAll("p"))
        addListOfBlockListeners(document.querySelectorAll("a"))

        refreshBetterColors();
    }, [0])

    return (
        <div className="article">
            <div className="article_image">
                <img src={"../images/" + image} alt="{image}"/>
            </div>
            <div className="article_content">
                <div className="article_title"><h1>{data.title}</h1>
                </div>
                <div className="article_fragment">{data.title.slice(0, 200)}
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
