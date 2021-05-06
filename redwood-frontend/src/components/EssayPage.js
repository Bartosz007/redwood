import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import Essay from "./essay_ingredients/Essay";
import {getArticle, getArticleList} from "../requests/article";

function EssayPage() {

    let { id } = useParams();
    return (
        <main className="main_global">
            <Essay idArticle={id}/>
        </main>
    );

}

export default EssayPage;