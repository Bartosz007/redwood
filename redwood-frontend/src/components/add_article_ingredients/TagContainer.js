import React from "react";
import BetterTag from "./basic_ingredients/BetterTag";

function TagContainer(){
    return(
        <div className="tag_container">
            <BetterTag/>
            <BetterTag/>
            <BetterTag/>
            <BetterTag/>
            <BetterTag/>
         </div>
    );
}

export default TagContainer;