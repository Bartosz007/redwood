import React from "react";

import LoginForm from "./basic_ingredients/LoginForm";
import RegisterForm from "./basic_ingredients/RegisterForm";
import SettingsPanel from "./basic_ingredients/SettingsPanel";

class Settings extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;

        this.state={
            context: <LoginForm/>,
            textOfFirstButton:"Zarejestruj się",
            textOfSecondButton:"Ustawienia",
            typeOfFirst:false,
            typeOfSecond:false
        }
    }

    firstButtonActions = ()=>{
        this.setState({
                typeOfFirst:!this.state.typeOfFirst
            },
            ()=>{
                if(this.state.typeOfFirst){
                    this.setState({
                        context:<RegisterForm/>,
                        textOfFirstButton:"Zaloguj się"
                    })
                }
                else{
                    this.setState({
                        context:<LoginForm/>,
                        textOfFirstButton:"Zarejestruj się"
                    })
                }

                this.setState({
                    textOfSecondButton:"Ustawienia",
                    typeOfSecond:false
                })

            })
    }

    secondButtonActions=()=>{
        this.setState({
                typeOfSecond:!this.state.typeOfSecond
            },
            ()=>{
                if(this.state.typeOfSecond){
                    this.setState({
                        context:<SettingsPanel/>,
                        textOfSecondButton:"Zarejestruj się",
                    })
                }
                else{
                    this.setState({
                        context:<RegisterForm/>,
                        textOfSecondButton:"Ustawienia"
                    })
                }


                this.setState({
                    textOfFirstButton:"Zaloguj się",
                    typeOfFirst:true
                })

            })
    }

    render(){
        return(
            <div className="settings_container" onClick={this.props.hideSettingsMenu}>
                <section className="settings_block">

                    <div className="settings_menu">
                        <div className="log_reg_button" onClick={this.firstButtonActions}>{this.state.textOfFirstButton}</div>
                        <div className="settings_button"onClick={this.secondButtonActions}>{this.state.textOfSecondButton}</div>
                    </div>

                    {this.state.context}

                </section>
            </div>
        );
    }
}

export default Settings;