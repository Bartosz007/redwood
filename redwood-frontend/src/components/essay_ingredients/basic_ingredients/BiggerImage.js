

function BiggerImage(props){
    const type = props.type
    return(
        <div className="bigger_image">
            <img src={`../images/${props.source}`}  alt="photo0"/>
            <p>
                {
                    type=="CROSS" ? "Krzyżówka":null
                }
            </p>
        </div>
    );
}

export default BiggerImage;