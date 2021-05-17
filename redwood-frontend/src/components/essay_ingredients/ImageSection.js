import SmallerImage from "./basic_ingredients/SmallerImage";
import BiggerImage from "./basic_ingredients/BiggerImage";



function ImageSection(props){

    const images = props.images.split(",");
    return(
        <section className="image_section">
            <SmallerImage source={images[0]} type={props.type}/>
            <BiggerImage source={images[1]} type={props.type}/>
            <SmallerImage source={images[2]} type={props.type}/>
        </section>
    );
}


export default ImageSection;