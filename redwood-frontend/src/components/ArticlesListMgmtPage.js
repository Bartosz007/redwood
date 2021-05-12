import React from 'react';
import MgmtArticleSection from "./articles_list_ingredients/MgmtArticleSection";
import {getArticleListToVerification} from "../requests/article";

function ArticlesListMgmtPage() {

    return (
        <main className="main_global">
            <MgmtArticleSection/>
        </main>
    );

}

export default ArticlesListMgmtPage;