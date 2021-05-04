

function BiggerImage(props){
    return(
        <div className="bigger_image">
            <img src={`../images/${props.source}`}  alt="photo0"/>
            <p></p>
        </div>
    );
}

export default BiggerImage;