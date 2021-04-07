import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
import AddArticlePage from "./components/AddArticlePage";
import ArticlesListPage from "./components/ArticlesListPage";
import ArticlesListMgmtPage from "./components/ArticlesListMgmtPage";
import UserPanelPage from "./components/UserPanelPage";
import Settings from "./components/settings_ingredients/Settings";

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            settingsMenuState: false
        }
    }

    showSettingsMenu = ()=>{
        this.setState({
            settingsMenuState:true
            });
    }

    hideSettingsMenu =(e) =>{
        if(e.target.className == "settings_container")
            this.setState({
                settingsMenuState:false
            });
    }
    render() {
        return (

            <Router>
                <Switch>

                    <Route path="/essey">
                        <EssayPage/>
                    </Route>

                    <Route path="/share">
                        <ArticlesListPage/>
                    </Route>

                    <Route path="/guides">
                        <UserPanelPage/>
                        {/*     <AddArticlePage/>*/}
                    </Route>


                    <Route path="/about">
                        <ArticlesListMgmtPage/>
                    </Route>

                    <Route path="/">
                        <StartPage/>
                    </Route>

                </Switch>

                <MenuButtons/>
                <SettingsButton showSettingsMenu={this.showSettingsMenu}/>
                <Background/>

                {this.state.settingsMenuState ? <Settings hideSettingsMenu={this.hideSettingsMenu}/> : null}


            </Router>
        )
    }

}

function Home() {
  return <h2></h2>;
}

function About() {
  return <h2></h2>;
}

function Users() {
  return <h2></h2>;
}

export default App;
