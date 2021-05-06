import React from 'react';
import { useHistory } from "react-router-dom";

function ArticleShort(props) {
    const data = props.value;
    const icon = data.images.split(",")[0];
    const author = data.user.userData;

    const history = useHistory();

    const onArticleClick = () =>{
        history.push("/article/"+data.idArticle)
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

            </div>
        </div>

    );

}

export default ArticleShort;