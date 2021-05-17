

function SmallerImage(props){
    const type = props.type
    return(
        <div className="smaller_image">
            <img src={`../images/${props.source}`} alt="photo0"/>
            <p>
            {
                type=="CROSS" ? "Podkładka":null
            }
            </p>
        </div>
    );
}


export default SmallerImage;