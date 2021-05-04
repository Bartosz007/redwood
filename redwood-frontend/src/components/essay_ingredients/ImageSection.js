import SmallerImage from "./basic_ingredients/SmallerImage";
import BiggerImage from "./basic_ingredients/BiggerImage";



function ImageSection(props){
    const images = props.images.split(",");

    return(
        <section className="image_section">
            <SmallerImage source={images[0]}/>
            <BiggerImage source={images[1]}/>
            <SmallerImage source={images[2]}/>
        </section>
    );
}


export default ImageSection;