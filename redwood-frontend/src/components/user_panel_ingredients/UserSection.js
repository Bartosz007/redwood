import React, {useState} from 'react';
import User from "./User";
import {getUsers} from "../../requests/user";
import {store} from "../../storage/storage";
import ArticleSection from "../articles_list_ingredients/ArticleSection";
import {useHistory} from "react-router-dom";
import {ADMIN, isPermission} from "../../scripts/permissionScripts";

function UserSection() {
    const [userList, setUserList] = useState();
    const [loading, setLeading] = useState(false);
    const state = store.getState()
    const email =  state.email;
    const history = useHistory();
    const perms = isPermission(ADMIN)

    getUsers().then((data) => {
        if(perms){
            setUserList(data)
            setLeading(true)
        }else{
            history.push("/")
        }
    })


    return (
        <section className="user_section">
            {
                loading?
                userList.filter(user => user.email!=email).map(
                    val => <User key={val.idUser} value={val}/>
                ):
                null
            }
        </section>
    );

}

export default UserSection;