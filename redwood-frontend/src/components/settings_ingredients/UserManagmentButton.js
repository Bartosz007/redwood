import {useHistory} from "react-router-dom";


function UserArticleManagementButton(){
    const history = useHistory();

    const openUsersMgmt = () => {
        console.log("klik")
        history.push("/userPanel")
    }

    return(
        <div className="user_mgmt_button" onClick={openUsersMgmt}>
            <img src="../icons/users.svg" alt="users"/>
        </div>
    );
}

export default UserArticleManagementButton;