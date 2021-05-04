import {Link} from "react-router-dom";


function Tags(props){
    return(
        <div className="tags">
            {
                props.tagsData.map( tag =>{
                    return <Link to="/" key={tag.idTag}>{tag.name}</Link>
                })
            }
        </div>
    );
}

export default Tags;