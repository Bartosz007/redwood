

function Comment(){
    return(
        <div className="comment">

            <div className="user_container">
                <div className="user_photo">
                    <img src="../images/avatar1.png" alt="user_photo"/>
                </div>
                <div className="user_data">Adam Driver</div>
            </div>
            <div className="comment_container">
                <div className="comment_action">
                    <img src="../icons/delete.svg" alt="delete"/>
                    <img src="../icons/edit.svg" alt="delete"/>
                    <img src="../icons/warn.svg" alt="delete"/>
                </div>
                <div className="comment_content">Komentarzz do np 2000 znaków, piszę żeby choć w pewnym
                    stopniu zapełnić ten kontener, nie czarodzejski tylko magiczna i nie fujarka tylko flet,
                    magiczna flet, tak bredzę, bla bla lalalaal la lal a bla la bla bla
                </div>
                <div className="comment_data">
                    <p>25.03.2021</p>
                    <p>19.45</p>
                </div>
            </div>

        </div>
    );
}

export default Comment;