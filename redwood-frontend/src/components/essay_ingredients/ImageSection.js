import SmallerImage from "./basic_ingredients/SmallerImage";
import BiggerImage from "./basic_ingredients/BiggerImage";



function ImageSection(){
    return(
        <section className="image_section">
            <SmallerImage/>
            <BiggerImage/>
            <SmallerImage/>
        </section>
    );
}


export default ImageSection;