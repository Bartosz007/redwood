import React from "react";

function TagContainer(){
    return(
        <div className="article_data">
            <label>Cecha 1<input type="file" name="photos"/></label>
            <label>Krzyżówka<input type="file" name="photos"/></label>
            <label>Cecha 2<input type="file" name="photos"/></label>
        </div>
    );
}

export default TagContainer;