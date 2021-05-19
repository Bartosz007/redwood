import React, {useEffect} from "react";
import {addListOfBlockListeners, addListOfFontListeners, refreshBetterColors} from "../../scripts/betterColors";


function EssayData(props){

    const setPhotos = props.setPhotos

    useEffect(() => {
        // addBlockStaticListenerRev(document.querySelector("."))
       /* addListOfBlockListeners(document.querySelectorAll("input"))
        addListOfFontListeners(document.querySelectorAll("input"))
*/
        addListOfBlockListeners(document.querySelectorAll("input"))
        addListOfFontListeners(document.querySelectorAll("input"))
        refreshBetterColors()
    },[0])

    return(
        <div className="article_data">
            <input type="file" multiple
                   name="photos"
                   onChange={(e)=>setPhotos(e.target.files)}
            />

        </div>
    );
}

export default EssayData;