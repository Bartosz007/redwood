import React from 'react';
import SearchBar from "./global/SearchBar";
import UserSection from "./user_panel_ingredients/UserSection";

class UserPanelPage extends React.Component{
    render() {
        return (
            <main className="main_global">
                <SearchBar/>
                <UserSection />
            </main>
        );
    }
}

export default UserPanelPage;