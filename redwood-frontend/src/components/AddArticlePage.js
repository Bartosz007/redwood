import React from 'react';
import TagContainer from "./add_article_ingredients/TagContainer";
import AddTag from "./add_article_ingredients/basic_ingredients/AddTag";
import EssayData from "./add_article_ingredients/EssayData";
import CrossData from "./add_article_ingredients/CrossData";

class AddArticlePage extends React.Component{
    render() {
        return (
            <main className="main_global">
                <form className="add_form">
                    <div className="header"><h1>Dodaj artykuł</h1></div>
                    <div className="title">
                        <input type="text" name="title" placeholder="Tytuł"/>
                    </div>

                    <TagContainer/>
                    <AddTag/>
                    <EssayData/>
                   {/* <CrossData/>*/}
                    <div className="text_container">
                        <textarea maxLength="10000" name="text"></textarea>
                        <button>Zatwierdź</button>
                    </div>

                </form>
            </main>
        );
    }
}

export default AddArticlePage;