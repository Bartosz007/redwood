import React, {useEffect, useState} from 'react';
import TagContainer from "./add_article_ingredients/TagContainer";
import EssayData from "./add_article_ingredients/EssayData";
import CrossData from "./add_article_ingredients/CrossData";
import {store} from "../storage/storage";
import toBase64, {toBase64Multiple} from "../scripts/imageEncoder";
import {validateArticleData} from "../scripts/validationScripts";
import {addArticle} from "../requests/article";
import {
    addBlockListener,
    addBlockStaticListener,
    addBlockStaticListenerRev,
    addFontListener, addListOfBlockListeners, addListOfFontListeners,
    refreshBetterColors
} from "../scripts/betterColors";
import {useHistory} from "react-router-dom";
import betterAlert from "../scripts/betterAlert";

function AddArticlePage() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("ESSAY");
    const [text, setText] = useState("");
    const [images, setImages] = useState();
    const [tags, setTags] = useState();

    const history = useHistory()
    const loginStatus = (store.getState().loginStatus==true || store.getState().loginStatus=="true")
        && store.getState().permission != "ZBANOWANY"

    const changeType = (e) => {
        setType(e.target.value)
    }

    const setPhotos = (e) =>{
        setImages(e)
        console.log(e)
    }

    useEffect(()=>{
       //
        if(!loginStatus)
            history.push("/")
    })


    const onAddArticle = () =>{
        const email =  store.getState().email;
      //  console.log(images.slice(0, 3))
       // setImages(images.slice(0, 3));

        const [validation, message] = validateArticleData(title, text, images, tags)

        if (validation) {
            betterAlert("Dodaję artykuł...");

            toBase64Multiple(images).then((data) => {
                const articleData = {
                    "title": title,
                    "images": data,
                    "text": text,
                    "articleType": type,
                    "tags": tags,
                    "email": email
                }

                addArticle(articleData).then(data => {
                    betterAlert(data.message)

                    setTimeout(() => {
                        history.push("/")
                    }, 1000)

                })
            })

        } else {
            betterAlert(message);
        }


      //  console.log(validation);
    }

    useEffect(() => {
        addBlockStaticListenerRev(document.querySelector(".add_form"))
        addFontListener(document.querySelector(".header").childNodes[0])

        addListOfFontListeners(document.querySelectorAll("input"));
        addListOfBlockListeners(document.querySelectorAll("input"))

        addBlockStaticListener(document.querySelector(".add_form_text"))
        addFontListener(document.querySelector(".add_form_text"))

        addFontListener(document.querySelector(".add_form_button"))

        addBlockStaticListener(document.querySelector(".select_category"))
        addFontListener(document.querySelector(".select_category"))
        addListOfFontListeners(document.querySelectorAll(".select_category")[0])

        addBlockListener(document.querySelector("button"))
        refreshBetterColors()
    },[0])

    return (
        <main className="main_global">
            <form className="add_form">
                <div className="header"><h1>Dodaj artykuł</h1></div>
                <div className="title">
                    <input value={title}
                           onChange={e=>setTitle(e.target.value)}
                           type="text"
                           name="title"
                           placeholder="Tytuł"/>
                </div>

                <TagContainer setTags={setTags}/>

                <select className="select_category" onChange={changeType}>
                    <option>Wybier kategorię</option>
                    <option>GUIDE</option>
                    <option>ESSAY</option>select_category
                    <option>CROSS</option>
                </select>

                {
                    type == "CROSS" ?
                        <CrossData setPhotos={setPhotos}/>:
                        <EssayData setPhotos={setPhotos}/>
                }

                <div className="text_container">
                    <textarea maxLength="10000"
                              className="add_form_text"
                              value={text}
                              onChange={e=>setText(e.target.value)}
                    ></textarea>
                    <button
                        type="button"
                        onClick={onAddArticle}
                        className="add_form_button">
                        Zatwierdź</button>
                </div>

            </form>
        </main>
    );

}

export default AddArticlePage;