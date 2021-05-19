import {useHistory} from "react-router-dom";

function UserArticleManagementButton() {

    const history = useHistory();

    const openUsersArticleMgmt = () => {
        history.push("/userArticleMgmtList")
    }

    return (
        <div className="user_article_mgmt_button" onClick={openUsersArticleMgmt}>
            <img src="../icons/list.svg" alt="list"/>
        </div>
    );
}

export default UserArticleManagementButton;
