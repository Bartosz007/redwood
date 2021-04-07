import React from 'react';

class User extends React.Component{
    render() {
        return (
            <div className="user">
                <div className="user_image">
                    <img src="../images/avatar3.png" alt="plant0"/>
                </div>
                <div className="user_data">
                    <div className="user_nick">
                        Nick: NeganAndLucille
                    </div>
                    <div className="user_name">
                        Imie: Negan
                    </div>
                    <div className="user_comments">
                        Liczba komentarzy: 55
                    </div>
                    <div className="user_articles">
                        Liczba aktykułów: 2/56
                    </div>
                    <div className="user_warns">
                        Liczba ostrzerzeń: 45
                    </div>
                    <div className="user_rang">
                        Ranga: moderator
                    </div>
                </div>
                <div className="user_actions">
                    <div className="change_rang">
                        <select>
                            <option>Zmień rangę</option>
                            <option>head admin</option>
                            <option>admin</option>
                            <option>head moderator</option>
                            <option>moderator</option>
                            <option>user</option>
                            <option>odbanowany</option>
                            <option>zbanowany</option>
                        </select>
                    </div>
                    <div className="give_warn">Ostrzeżenie</div>
                    <div className="give_ban">Zbanowanie</div>
                    <div className="give_ban">Usunięcie</div>
                </div>
            </div>
        );
    }
}

export default User;