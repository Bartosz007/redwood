import {delComm} from "../../../requests/article";
import betterAlert from "../../../scripts/betterAlert";
import {useHistory} from "react-router-dom";
import {giveWarn} from "../../../requests/user";
import {useEffect} from "react";
import {
    addListOfBlockStaticListeners,
    addListOfFontListeners,
    refreshBetterColors
} from "../../../scripts/betterColors";
import {isPermission, ADMIN, MODERATOR} from "../../../scripts/permissionScripts";


function Comment(props) {
    const data = props.value
    const user = data.user.userData
    const history = useHistory();

    const permissions = isPermission(ADMIN) || isPermission(MODERATOR)

    const deleteComment = () => {
        delComm(data.idComment).then((data) => {
            if (data.status) {

                betterAlert("Pomyślnie usunięto komentarz!");
                setTimeout(() => {
                    history.go(0);
                }, 1000)
            } else {
                betterAlert("Błąd z usuwaniem!");
            }
        })
    }

    const onGiveWarn = () => {
        betterAlert("...");

        giveWarn(data.user.idUser).then((data) => {
            betterAlert(data.message)
        })

    }

    useEffect(() => {
        addListOfBlockStaticListeners(document.querySelectorAll(".comment"))
        addListOfFontListeners(document.querySelectorAll(".user_data"))
        addListOfFontListeners(document.querySelectorAll(".comment_content"))
        addListOfFontListeners(document.querySelectorAll("p"))
        refreshBetterColors()
    })

    return (
        <div className="comment">

            <div className="user_container">
                <div className="user_photo">
                    <img src={"../images/" + user.image} alt="user_photo"/>
                </div>
                <div className="user_data">{user.name + " " + user.surname}</div>
            </div>
            <div className="comment_container">
                <div className="comment_action">
                    {
                        permissions ?
                            <img onClick={deleteComment} src="../icons/delete.svg" alt="delete"/> :
                            null
                    }
                    {
                        permissions ?
                            <img onClick={onGiveWarn} src="../icons/warn.svg" alt="delete"/> :
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