import React from "react";
let photos = [null,null,null];
function TagContainer(props) {

    const setPhotos = props.setPhotos


    const addPhoto = (photo, index) => {
        photos[index] = photo[0];
        console.log(photos)
        setPhotos(photos);
    }

    return (
        <div className="article_data">
            <label>Cecha 1
                <input type="file"
                       name="photos"
                       onChange={(e) => addPhoto(e.target.files,0)}/>
            </label>

            <label>Krzyżówka
                <input type="file"
                       name="photos"
                       onChange={(e) => addPhoto(e.target.files,1)}/>

            </label>
            <label>Cecha 2
                <input type="file"
                       name="photos"
                       onChange={(e) => addPhoto(e.target.files,2)}/>

            </label>
        </div>
    );
}

export default TagContainer;