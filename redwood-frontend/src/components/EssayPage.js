import React from 'react';

import Essay from "./essay_ingredients/Essay";

class EssayPage extends React.Component{
    render() {
        return (
            <main className="main_global">
                <Essay/>
            </main>
        );
    }
}

export default EssayPage;