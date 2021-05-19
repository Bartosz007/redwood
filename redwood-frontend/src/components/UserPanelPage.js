import React from 'react';
import SearchBar from "./global/SearchBar";
import UserSection from "./user_panel_ingredients/UserSection";

function UserPanelPage() {

    return (
        <main className="main_global">
            <UserSection key="userSection"/>
        </main>
    );

}

export default UserPanelPage;