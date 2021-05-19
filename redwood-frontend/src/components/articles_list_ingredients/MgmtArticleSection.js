import React, {useState} from 'react';
import MgmtArticle from "./basic_ingredients/MgmtArticle";
import {getArticleListToVerification} from "../../requests/article";
import ArticleShort from "./basic_ingredients/AddArticleSection";
import AddArticleSection from "./basic_ingredients/AddArticleSection";
import {useHistory} from "react-router-dom";
import {store} from "../../storage/storage";
import {ADMIN, isPermission, MODERATOR} from "../../scripts/permissionScripts";

function MgmtArticleSection() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const permission = isPermission(ADMIN) || isPermission(MODERATOR)
    getArticleListToVerification().then((data) => {

        if(permission){
            setData(data);
            setLoading(true)
        }else{
            history.push("/")
        }

    })

    return (
        <section className="article_section">
            {
                loading ?
                    data.map(
                        val => <MgmtArticle key={val.idArticle} value={val}/>
                    ) :
                    null
            }
        </section>
    );

}

export default MgmtArticleSection;