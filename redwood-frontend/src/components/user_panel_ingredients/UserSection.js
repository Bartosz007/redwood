import React, {useState} from 'react';
import {store} from "../../storage/storage";

import User from "./User";
import {getUsers} from "../../requests/user";
import {useHistory} from "react-router-dom";
import {isPermission, ADMIN} from "../../scripts/permissionScripts";

function UserSection() {
    const [userList, setUserList] = useState();
    const [loaded, setLoaded] = useState(false);

    const email = store.getState().email;
    const history = useHistory();
    const perms = isPermission(ADMIN)

    getUsers().then((data) => {
        if (perms) {
            setUserList(data)
            setLoaded(true)
        } else {
            history.push("/")
        }
    })

    return (
        <section className="user_section">
            {
                loaded ?
                    userList.filter(user => user.email != email).map(
                        val => <User key={val.idUser} value={val}/>
                    ) :
                    null
            }
        </section>
    );

}

export default UserSection;
