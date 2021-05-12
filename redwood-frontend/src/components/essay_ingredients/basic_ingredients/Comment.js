import {store} from "../../../storage/storage";
import {delComm} from "../../../requests/article";
import {changeAlertText, getCustomAlert} from "../../../scripts/alert";
import {useHistory} from "react-router-dom";
import {giveWarn} from "../../../requests/user";


function Comment(props){
    const data = props.value
    const user = data.user.userData
    const history = useHistory();
    const permsBasic = store.getState().permission;
    const perms = (permsBasic == "ADMIN") ||  (permsBasic == "MODERATOR")

    const deleteComment = () =>{
        delComm(data.idComment).then((data)=>{
            if(data.status){
                let alertBox = getCustomAlert("Pomyślnie usuniętko komentarz!");
                document.body.append(alertBox)
                history.go(0);
            }else{
                let alertBox = getCustomAlert("Błą z usuwaniem!");
                document.body.append(alertBox)
            }
        })
    }

    const onGiveWarn = () =>{
        let alertBox = getCustomAlert("...");
        document.body.append(alertBox)

        giveWarn(data.user.idUser).then((data)=>{
            changeAlertText(data.message)
        })

    }
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
                    {
                        perms ?
                            <img onClick={deleteComment} src="../icons/delete.svg" alt="delete"/> :
                            null
                    }
                    {
                        perms ?
                            <img onClick={onGiveWarn} src="../icons/warn.svg" alt="delete"/>:
                            null
                    }

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