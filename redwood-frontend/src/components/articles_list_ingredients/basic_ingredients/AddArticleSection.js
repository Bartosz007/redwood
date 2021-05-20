import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {addBlockListener} from "../../../scripts/betterColors";

function ArticleShort() {

    const history = useHistory();

    const goToAddArticle = () => {
        history.push("/addArticle");
    }
    useEffect(() => {
        addBlockListener(document.querySelector(".add_article"))
    })

    return (
        <section className="article_section" onClick={goToAddArticle}>

            <div className="article">
                <div className="article_image">
                    <img src="../images/plant0.jpg" alt="plant0"/>
                </div>
                <div className="article_content">

                    <div className="article_title"><h1 className="title_text">Miejsce na Twój artykuł</h1>
                    </div>

                    <div className="article_fragment">
                        Chcesz mieć swój wkład w ten blog?
                        Chcesz się pochwalić własnymi obserwacjami?
                    </div>

                    <button className="add_article">Dalej</button>

                </div>
            </div>

        </section>

    );

}

export default ArticleShort;
