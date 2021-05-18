import Tags from "./basic_ingredients/Tags";
import {useEffect} from "react";
import {addBlockStaticListener, addFontListener, refreshBetterColors} from "../../scripts/betterColors";



function ImageSection(props){

    useEffect(() => {
        addBlockStaticListener(document.querySelector(".title"))
        addBlockStaticListener(document.querySelector(".text"))
        addFontListener(document.querySelector(".title").childNodes[0])
        addFontListener(document.querySelector(".text"))
        refreshBetterColors()
    })

    return(
        <section className="article_section">

            <div className="title">
                <h1>{props.articleData.title}</h1>
            </div>

            <Tags tagsData={props.articleData.tags}/>

            <div className="text">
                {props.articleData.text}
            </div>


        </section>
    );
}


export default ImageSection;