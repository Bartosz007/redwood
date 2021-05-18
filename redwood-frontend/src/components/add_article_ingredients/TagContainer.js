import React, {useEffect, useState} from "react";
import BetterTag from "./basic_ingredients/BetterTag";
import {Link} from "react-router-dom";
import {
    addBlockListener,
    addBlockStaticListener,
    addBlockStaticListenerRev,
    addFontListener,
    addListOfBlockListeners,
    addListOfFontListeners, refreshBetterColors
} from "../../scripts/betterColors";

let tagList = [];

function TagContainer(props) {

    const [tags, setTags] = useState();
    const [tagValue, setTagValue] = useState("");
    const addTagsParent = props.setTags


    const addTag = (e) => {

        if(e.keyCode == 13 && tagValue.length > 2){

            tagList.push(tagValue)

            setTags(generateTags(tagList))

            setTagValue("");

            addTagsParent(tagList)
        }
    }

    const removeTag = (e,value)=>{

        for(let i =0;i<tagList.length;i++){
            if(tagList[i] == value){
                tagList.splice(i,1);
                break;
            }
        }

        setTags(generateTags(tagList))

    }

    const generateTags = (tagList)=>{
        return tagList.map(tag =>{
            const keyValue = Math.floor(Math.random() * 1000) + tag;
            return <BetterTag value={tag} key={keyValue} removeTag={removeTag}/>
        })
    }

    return (
        <div className="tag_container">

            <div className="tags">

                {
                    tags
                }

            </div>

            <div className="tag_add">
                <input type="text"
                       name="add_tag"
                       placeholder="Dodaj tag"
                       onKeyDown={addTag}
                       value={tagValue}
                       onChange={e => setTagValue(e.target.value)}
                />
            </div>

        </div>

    );
}

export default TagContainer;