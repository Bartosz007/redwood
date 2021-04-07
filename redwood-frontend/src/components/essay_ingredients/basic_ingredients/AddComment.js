function AddComment(){
    return(
        <div className="add_comment">
            <form>
                <textarea name="new_comment_text" required maxLength="2000"></textarea>
                <button name="addButton">Dodaj</button>
            </form>
        </div>
    );
}

export default AddComment;