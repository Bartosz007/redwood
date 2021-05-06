

function Comment(props){
    const data = props.value
    const user = data.user.userData

    return(
        <div className="comment">

            <div className="user_container">
                <div className="user_photo">
                    <img src={"../images/"+user.image} alt="user_photo"/>
                </div>
                <div className="user_data">{user.name+" "+user.surname}</div>
            </div>
            <div className="comment_container">
                <div className="comment_action">
                    <img src="../icons/delete.svg" alt="delete"/>
                    <img src="../icons/edit.svg" alt="delete"/>
                    <img src="../icons/warn.svg" alt="delete"/>
                </div>
                <div className="comment_content">{data.text}
                </div>
                <div className="comment_data">
                    <p>{data.date}</p>
                    <p>{data.time}</p>
                </div>
            </div>

        </div>
    );
}

export default Comment;