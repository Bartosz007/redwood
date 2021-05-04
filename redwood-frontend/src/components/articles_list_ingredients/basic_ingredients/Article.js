import React from 'react';
import { useLocation } from "react-router";

class Article extends React.Component{
    data;
    icon;

    constructor(props) {
        super(props);
        this.data = props.articleData;
        this.icon = props.articleData.images.split(",")[0];
    }

    selectArticle = () =>{
        window.location = `/article/${this.data.idArticle}`;
    }


    render(){
        return (
            <div className="article" onClick={this.selectArticle}>
                <div className="article_image">
                    <img src={"../images/"+this.icon} alt="plant0"/>
                </div>
                <div className="article_content">
                    <div className="article_title"><h1>{this.data.title}</h1>
                    </div>
                    <div className="article_fragment">{this.data.text.substr(0,200)}
                    </div>
                    <div className="article_info">
                        <p>{this.data.articleType.type}</p>
                        <p>{this.data.user.userData.name+ " " +this.data.user.userData.surname}</p>
                        <p>Data publikacji: <br/> {this.data.date}</p>

                    </div>
                </div>
            </div>
        );
    }

}

export default Article;