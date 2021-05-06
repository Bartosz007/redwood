import "./css/button_styles.css";
import "./css/global_styles.css";
import "./css/main_page_styles.css";
import "./css/article_styles.css";
import "./css/add_article_styles.css";
import "./css/articles_list_styles.css";
import "./css/user_panel_styles.css";
import "./css/settings_styles.css";

import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useCookies} from 'react-cookie';

import MenuButtons from "./components/global/MenuButtons";
import SettingsButton from "./components/settings_ingredients/SettingsButton";
import Background from "./components/global/Background";
import StartPage from './components/StartPage';
import EssayPage from "./components/EssayPage";
import ArticlesListPage from "./components/ArticlesListPage";
import ArticlesListMgmtPage from "./components/ArticlesListMgmtPage";


import {loadCookies} from "./scripts/cookiesScripts";
import Settings from "./components/settings_ingredients/Settings";

function App() {
    const [menuState, setMenuState] = useState(false);

    const [cookies, setCookie] = useCookies(['redwood-cookie']);
    loadCookies(cookies, setCookie)



    //console.log(cookies);

    // const mainState = useSelector(state => state)
    // console.log(mainState)
    //  const dispatch = useDispatch()
    //  dispatch(setAlertState(true))
    // console.log(mainState)



    const hideSettingsMenu = (e) => {

        if (e.target.className == "settings_container"){
            setMenuState(false)
        }

    }

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
                    path="/about"
                    key="about"
                    children={<ArticlesListMgmtPage/>}>
                </Route>

                <Route path="/"
                       key="defaultpath"
                       children={<StartPage/>}>
                </Route>

            </Switch>

            <MenuButtons/>

            <SettingsButton showSettingsMenu={() => setMenuState(true)}/>

            <Background/>

            {menuState ? <Settings hideSettingsMenu={hideSettingsMenu}/> : null}

        </Router>
    )

}


export default App;
