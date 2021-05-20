import {useHistory} from "react-router-dom";

function UserManagementButton(){
    const history = useHistory();

    const openUsersMgmt = () => {
        history.push("/userPanel")
    }

    return(
        <div className="user_mgmt_button" onClick={openUsersMgmt}>
            <img src="../icons/users.svg" alt="users"/>
        </div>
    );
}

export default UserManagementButton;
