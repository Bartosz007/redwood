import {Link} from "react-router-dom";
import {useEffect} from "react";
import {
    addListOfBlockListeners,
    refreshBetterColors
} from "../../../scripts/betterColors";


function Tags(props) {
    useEffect(() => {
        addListOfBlockListeners(document.querySelectorAll(".simpleTag"))
        refreshBetterColors()
    })
    return (
        <div className="tags">
            {
                props.tagsData.map(tag => {
                    return <Link className="simpleTag" to="/" key={tag.idTag}>{tag.name}</Link>
                })
            }
        </div>
    );
}

export default Tags;
