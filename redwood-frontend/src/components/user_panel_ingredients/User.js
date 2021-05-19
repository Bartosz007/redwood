import React, {useEffect, useState} from 'react';
import {changePermit, deleteUser, giveWarn} from "../../requests/user";
import {
    addBlockListener, addBlockStaticListener,
    addFontListener, addListOfBlockListeners, addListOfBlockStaticListeners,
    addListOfFontListeners,
    refreshBetterColors
} from "../../scripts/betterColors";
import betterAlert from "../../scripts/betterAlert";
import {useHistory} from "react-router-dom";

function User(props) {
    const data = props.value
    const userData = data.userData
    const history = useHistory();
    //console.log(data)

    const onChangePermit = (e) =>{

        changePermit(e.target.value, data.idUser).then((data) =>{
            betterAlert(data.message)
        })
    }

    const onGiveWarn = () =>{
        giveWarn(data.idUser).then((data) =>{
            betterAlert(data.message)
           // history.go(0)
        })
    }

    const onGiveBan = () =>{
        changePermit("ZBANOWANY", data.idUser).then((data) =>{
            betterAlert(data.message)
        })
    }

    const onDelete = () =>{
        deleteUser(data.idUser).then((data) =>{
            betterAlert(data.message)
        })
    }

    useEffect(()=>{

        addListOfBlockStaticListeners(document.querySelectorAll(".user"))
        addListOfFontListeners(document.querySelectorAll(".user_nick"))
        addListOfFontListeners(document.querySelectorAll(".user_name"))
        addListOfFontListeners(document.querySelectorAll(".user_warns"))
        addListOfFontListeners(document.querySelectorAll(".user_rang"))

        addListOfFontListeners(document.querySelectorAll(".change_rang"))
        addListOfFontListeners(document.querySelectorAll(".give_warn"))
        addListOfFontListeners(document.querySelectorAll(".give_ban"))

        addListOfBlockListeners(document.querySelectorAll("select"))

        document.querySelectorAll("select").forEach(e=>{
            addListOfFontListeners(e)
        })
/*
        addBlockListener(document.querySelector(".article"))
        addFontListener(document.querySelector("h1"))
        addFontListener(document.querySelector(".article_fragment"))
        addListOfFontListeners(document.querySelectorAll("p"))
        addListOfFontListeners(document.querySelectorAll("a"))
*/

        refreshBetterColors();
    },[0])

    return (
        <div className="user">
            <div className="user_image">
                <img src={`../images/${userData.image}`} alt="plant0"/>
            </div>
            <div className="user_data">
                <div className="user_nick">
                    Email:{data.email}
                </div>
                <div className="user_name">
                    {userData.name+ " "+userData.surname}
                </div>
                <div className="user_warns">
                    Liczba ostrzerzeń: {userData.warnLevel}
                </div>
                <div className="user_rang">
                    Ranga: {userData.permission}
                </div>

            </div>
            <div className="user_actions">
                <div className="change_rang">
                    <select onChange={onChangePermit}>
                        <option>Zmień rangę</option>
                        <option>ADMIN</option>
                        <option>MODERATOR</option>
                        <option>USER</option>
                        <option>ZBANOWANY</option>
                    </select>
                </div>
                <div onClick={onGiveWarn} className="give_warn">Ostrzeżenie</div>
                <div onClick={onGiveBan} className="give_ban">Zbanowanie</div>
                <div onClick={onDelete} className="give_ban">Usunięcie</div>
            </div>
        </div>
    );

}

export default User;