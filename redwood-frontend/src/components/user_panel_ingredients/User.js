import React, {useEffect} from 'react';

import {changePermit, deleteUser, giveWarn} from "../../requests/user";
import {
    addListOfBlockListeners,
    addListOfBlockStaticListeners,
    addListOfFontListeners,
    refreshBetterColors
} from "../../scripts/betterColors";
import betterAlert from "../../scripts/betterAlert";

function User(props) {
    const data = props.value
    const userData = data.userData
    const onChangePermit = (e) => {

        changePermit(e.target.value, data.idUser).then((data) => {
            betterAlert(data.message)
        })
    }

    const onGiveWarn = () => {
        giveWarn(data.idUser).then((data) => {
            betterAlert(data.message)
        })
    }

    const onGiveBan = () => {
        changePermit("ZBANOWANY", data.idUser).then((data) => {
            betterAlert(data.message)
        })
    }

    const onDelete = () => {
        deleteUser(data.idUser).then((data) => {
            betterAlert(data.message)
        })
    }

    useEffect(() => {

        addListOfBlockStaticListeners(document.querySelectorAll(".user"))
        addListOfFontListeners(document.querySelectorAll(".user_nick"))
        addListOfFontListeners(document.querySelectorAll(".user_name"))
        addListOfFontListeners(document.querySelectorAll(".user_warns"))
        addListOfFontListeners(document.querySelectorAll(".user_rang"))

        addListOfFontListeners(document.querySelectorAll(".change_rang"))
        addListOfFontListeners(document.querySelectorAll(".give_warn"))
        addListOfFontListeners(document.querySelectorAll(".give_ban"))

        addListOfBlockListeners(document.querySelectorAll("select"))

        document.querySelectorAll("select").forEach(e => {
            addListOfFontListeners(e)
        })

        refreshBetterColors();

    }, [0])

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
                    {userData.name + " " + userData.surname}
                </div>
                <div className="user_warns">
                    Liczba ostrzerze??: {userData.warnLevel}
                </div>
                <div className="user_rang">
                    Ranga: {userData.permission}
                </div>

            </div>
            <div className="user_actions">
                <div className="change_rang">
                    <select onChange={onChangePermit}>
                        <option>Zmie?? rang??</option>
                        <option>ADMIN</option>
                        <option>MODERATOR</option>
                        <option>USER</option>
                        <option>ZBANOWANY</option>
                    </select>
                </div>
                <div onClick={onGiveWarn} className="give_warn">Ostrze??enie</div>
                <div onClick={onGiveBan} className="give_ban">Zbanowanie</div>
                <div onClick={onDelete} className="give_ban">Usuni??cie</div>
            </div>
        </div>
    );

}

export default User;
