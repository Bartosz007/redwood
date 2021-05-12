import React, {useState} from 'react';
import User from "./User";
import {getUsers} from "../../requests/user";
import {store} from "../../storage/storage";
import ArticleSection from "../articles_list_ingredients/ArticleSection";

function UserSection() {
    const [userList, setUserList] = useState();
    const [loading, setLeading] = useState(false);
    const email =  store.getState().email;

    getUsers().then((data) => {
        setUserList(data)
        setLeading(true)
    })

    return (
        <section className="user_section">
            {loading?
                userList.filter(user => user.email!=email).map(
                    val => <User key={val.idUser} value={val}/>
                ):
                null}
        </section>
    );

}

export default UserSection;