import React from 'react';
import User from "./User";

class UserSection extends React.Component{
    render() {
        return (
            <section className="user_section">
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </section>
        );
    }
}

export default UserSection;