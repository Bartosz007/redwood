import React, {useState} from 'react';
import TagContainer from "./add_article_ingredients/TagContainer";
import EssayData from "./add_article_ingredients/EssayData";
import CrossData from "./add_article_ingredients/CrossData";
import {store} from "../storage/storage";
import toBase64, {toBase64Multiple} from "../scripts/imageEncoder";
import {validateArticleData} from "../scripts/validationScripts";
import {getCustomAlert} from "../scripts/alert";
import {addArticle} from "../requests/article";

function AddArticlePage() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("ESSAY");
    const [text, setText] = useState("");
    const [images, setImages] = useState();
    const [tags, setTags] = useState();

    const changeType = (e) => {
        setType(e.target.value)
    }

    const setPhotos = (e) =>{
        setImages(e)
        console.log(e)
    }



    const onAddArticle = () =>{
        const email =  store.getState().email;
      //  console.log(images.slice(0, 3))
       // setImages(images.slice(0, 3));

        const [validation, message] = validateArticleData(title, text, images)
        console.log(validation)
        if(validation){

        toBase64Multiple(images).then((data)=>{
            const articleData = {
                "title":title,
                "images":data,
                "text":text,
                "articleType": type,
                "tags":tags,
                "email": email
            }

            addArticle(articleData).then(data =>{
                let alertBox = getCustomAlert(data.message);
                document.body.append(alertBox)
            })

            console.log(articleData)
        })

        }else{
            let alertBox = getCustomAlert(message);
            document.body.append(alertBox)
        }


      //  console.log(validation);
    }

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
                              name="text"
                              value={text}
                              onChange={e=>setText(e.target.value)}
                    ></textarea>
                    <button type="button" onClick={onAddArticle}>Zatwierdź</button>
                </div>

            </form>
        </main>
    );

}

export default AddArticlePage;