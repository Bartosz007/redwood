import Comment from "./basic_ingredients/Comment";
import AddComment from "./basic_ingredients/AddComment";

function CommentSection(){
    return(
        <section className="comment_section">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <AddComment/>
        </section>
    );
}

export default CommentSection;