

function SmallerImage(props){
    return(
        <div className="smaller_image">
            <img src={`../images/${props.source}`} alt="photo0"/>
            <p></p>
        </div>
    );
}


export default SmallerImage;