import React from "react";


function EssayData(props){

    const setPhotos = props.setPhotos

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