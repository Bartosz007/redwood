import React from "react";

function EssayData(){
    return(
        <div className="article_data">
            <input type="file" name="photos"/>
            <select className="select_category">
                <option>Wybier kategorię</option>
                <option>Poradnik</option>
                <option>Artykuł</option>
            </select>
        </div>
    );
}

export default EssayData;