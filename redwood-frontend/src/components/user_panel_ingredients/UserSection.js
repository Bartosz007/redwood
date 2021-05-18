import React, {useState} from 'react';
import User from "./User";
import {getUsers} from "../../requests/user";
import {store} from "../../storage/storage";
import ArticleSection from "../articles_list_ingredients/ArticleSection";
import {useHistory} from "react-router-dom";

function UserSection() {
    const [userList, setUserList] = useState();
    const [loading, setLeading] = useState(false);
    const email =  store.getState().email;
    const history = useHistory();
    getUsers().then((data) => {
        if(data.state){
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