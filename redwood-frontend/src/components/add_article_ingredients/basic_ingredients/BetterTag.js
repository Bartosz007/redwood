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

        addFontListener(document.querySelector(".tag").childNodes[0])
        addBlockListener(document.querySelector(".tag"))

        refreshBetterColors()

    },[0])

    return(
        <div className="tag" onClick={e => selfDestroy(e,props.value)}>
            <div>{props.value}</div>
            <img src="../icons/delete.svg" alt="delete"/>
        </div>
    );

}

export default BetterTag;