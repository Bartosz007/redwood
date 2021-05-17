import Tags from "./basic_ingredients/Tags";



function ImageSection(props){
    console.log(props)
    return(
        <section className="article_section">

            <div className="title">
                <h1>{props.articleData.title}</h1>
            </div>

            <Tags tagsData={props.articleData.tags}/>

            <div className="text">
                {props.articleData.text}
            </div>


        </section>
    );
}


export default ImageSection;