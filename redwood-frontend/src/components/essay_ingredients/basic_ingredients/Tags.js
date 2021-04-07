import {Link} from "react-router-dom";


function Tags(){
    return(
        <div className="tags">
            <Link to="/">tag1</Link>
            <Link to="/">tag2</Link>
            <Link to="/">tag3</Link>
            <Link to="/">tag4</Link>
            <Link to="/">tag5</Link>
        </div>
    );
}

export default Tags;