import React from 'react';


class Article extends React.Component{
    render() {
        return (
            <div className="article">
                <div className="article_image">
                    <img src="../images/plant0.jpg" alt="plant0"/>
                </div>
                <div className="article_content">
                    <div className="article_title"><h1> tyt tytulk</h1>
                    </div>
                    <div className="article_fragment">Początek artykułu zakończony trzykropkiem, może to być na
                        przykład pierwsze 200 znaków. Piszę ten tekst, po to
                        aby zapełnić czymś tą część...
                    </div>
                    <div className="article_info">
                        <p>Artykuł</p>
                        <p>Autor: Billy Butcher</p>
                        <p>Data publikacji: 24.03.2021</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;