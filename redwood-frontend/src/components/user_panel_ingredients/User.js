import React, {useState} from 'react';
import {changePermit, deleteUser, giveWarn} from "../../requests/user";
import {getCustomAlert} from "../../scripts/alert";

function User(props) {
    const data = props.value
    const userData = data.userData
    //console.log(data)

    const onChangePermit = (e) =>{

        changePermit(e.target.value, data.idUser).then((data) =>{
            document.body.append(getCustomAlert(data.message))
        })
    }

    const onGiveWarn = () =>{
        giveWarn(data.idUser).then((data) =>{
            document.body.append(getCustomAlert(data.message))
        })
    }

    const onGiveBan = () =>{
        changePermit("ZBANOWANY", data.idUser).then((data) =>{
            document.body.append(getCustomAlert(data.message))
        })
    }

    const onDelete = () =>{
        deleteUser(data.idUser).then((data) =>{
            document.body.append(getCustomAlert(data.message))
        })
    }

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