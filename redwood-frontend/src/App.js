import "./css/button_styles.css";
import "./css/global_styles.css";
import "./css/main_page_styles.css";
import "./css/article_styles.css";
import "./css/add_article_styles.css";
import "./css/articles_list_styles.css";
import "./css/user_panel_styles.css";
import "./css/settings_styles.css";

import MenuButtons from "./components/global/MenuButtons";
import SettingsButton from "./components/settings_ingredients/SettingsButton";
import Background from "./components/global/Background";
import StartPage from './components/StartPage';
import EssayPage from "./components/EssayPage";
import ArticlesListPage from "./components/ArticlesListPage";
import ArticlesListMgmtPage from "./components/ArticlesListMgmtPage";
import UserManagementButton from "./components/settings_ingredients/UserManagementButton";
import UserArticleManagementButton from "./components/settings_ingredients/UserArticleManagementButton";
import Settings from "./components/settings_ingredients/Settings";
import UserPanelPage from "./components/UserPanelPage";
import AddArticlePage from "./components/AddArticlePage";

import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useCookies} from 'react-cookie';
import {loadCookies} from "./scripts/cookiesScripts";

import {store} from "./storage/storage";
import {
    addBlockListener,
    addListOfBlockListeners,
    refreshBetterColors
} from "./scripts/betterColors";

import {isPermission, ADMIN, MODERATOR} from "./scripts/permissionScripts";

function App() {
    const dispatch = store.dispatch;

    const [loading, setLoading] = useState(true);
    const [menuState, setMenuState] = useState(false);

    const [cookies, setCookie] = useCookies(['redwood']);

    const moderatorPermission = isPermission(MODERATOR) || isPermission(ADMIN)
    const adminPermission = isPermission(ADMIN)


    if (loading) {
        loadCookies(cookies, setCookie, dispatch);
        setLoading(!loading);
    }


    const hideSettingsMenu = (e) => {
        if (e === undefined || e.target.className === "settings_container") {
            setMenuState(false)
        }
    }

    useEffect(() => {
        addListOfBlockListeners(document.querySelector("header").childNodes)
        addBlockListener(document.querySelector(".menu_button"))


        if (adminPermission) {
            addBlockListener(document.querySelector(".user_mgmt_button"))
        }

        if (moderatorPermission) {
            addBlockListener(document.querySelector(".user_article_mgmt_button"))
        }

        refreshBetterColors()
    })

    return (

        <Router>

            <Switch>

                <Route
                    path="/essayList"
                    key="essays"
                    children={<ArticlesListPage type="essays"/>}>
                </Route>

                <Route
                    path="/crossList"
                    key="crosses"
                    children={<ArticlesListPage type="crosses"/>}>
                </Route>

                <Route
                    path="/userArticlesList"
                    key="userArticles"
                    children={<ArticlesListPage type="userArticles"/>}>
                </Route>

                <Route
                    path="/article/:id"
                    key="article">
                    children={<EssayPage/>}
                </Route>

                <Route
                    path="/userPanel"
                    key="userPanel">
                    children={<UserPanelPage/>}
                </Route>

                <Route
                    path="/userArticleMgmtList"
                    key="userArticleMgmtList">
                    children={<ArticlesListMgmtPage/>}
                </Route>


                <Route
                    path="/addArticle"
                    key="addArticle"
                    children={<AddArticlePage/>}>
                </Route>

                <Route path="/"
                       key="defaultPath"
                       children={<StartPage/>}>
                </Route>

            </Switch>

            <MenuButtons/>

            <SettingsButton showSettingsMenu={() => setMenuState(true)}/>

            {menuState ?
                <Settings hideSettingsMenu={hideSettingsMenu}/> :
                null
            }

            {moderatorPermission ?
                <UserArticleManagementButton/> :
                null
            }

            {adminPermission ?
                <UserManagementButton/> :
                null
            }


            <Background/>

        </Router>
    )

}

export default App;
