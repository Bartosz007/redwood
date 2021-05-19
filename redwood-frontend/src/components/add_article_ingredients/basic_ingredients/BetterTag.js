import {useEffect} from "react";
import {
    addBlockListener,
    addBlockStaticListener,
    addBlockStaticListenerRev,
    addFontListener,
    addListOfBlockListeners,
    addListOfFontListeners, refreshBetterColors
} from "../../../scripts/betterColors";

function BetterTag(props){

    const selfDestroy = props.removeTag

    useEffect(() => {

        addListOfFontListeners(document.querySelectorAll(".tag_text"))
        addListOfBlockListeners(document.querySelectorAll(".tag"))
        refreshBetterColors()

    },[0])

    return(
        <div className="tag" onClick={e => selfDestroy(e,props.value)}>
            <div className="tag_text">{props.value}</div>
            <img src="../icons/delete.svg" alt="delete"/>
        </div>
    );

}

export default BetterTag;