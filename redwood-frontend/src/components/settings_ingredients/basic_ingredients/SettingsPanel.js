'use strict'

import React from 'react';
import { SketchPicker} from 'react-color';

class SettingsPanel extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            colors:[
                "#000000ff",
                "#ffffffA0",
                "#fffffff0"
            ],
            colorPicker: false,
            actualColor: 0
        }
    }

    openColorPicker = ()=>{
        this.setState({colorPicker: true});
    }
    closeColorPicker= (e) =>{
        if(e.target.className == "color_picker_container")
            this.setState({colorPicker: false});
    }

    changeColor = (color) => {
        const oldColor = this.state.colors;
        oldColor[this.state.actualColor] = color.hex;
        this.setState({colors: oldColor})

    };

    changeColorComplete = (color) => {
        console.log(color)
    };

    changeFontColor = ()=>{
        this.openColorPicker();
        this.setState({ actualColor: 0 });
    }

    changeMainColor = ()=>{
        this.openColorPicker();
        this.setState({ actualColor: 1 });
    }

    changeSecondaryColor = ()=>{
        this.openColorPicker();
        this.setState({ actualColor: 2 });
    }



    render(){
        return (
            <form className="color_form">
                <div className="color_changer">
                    <p>Kolor czcionki:</p>
                    <button type="button" onClick={this.changeFontColor} className="change_color">
                        Zmień
                    </button>
                </div>

                <div className="color_changer">
                    <p>Główny kolor:</p>
                    <button type="button" onClick={this.changeMainColor}  className="change_color">Zmień</button>
                </div>

                <div className="color_changer">
                    <p>Pomocniczy kolor:</p>
                    <button type="button" onClick={this.changeSecondaryColor}  className="change_color">Zmień</button>
                </div>


                <div className="demo_colors">
                    <div className="demo_image_container">
                        <img src="../images/redwood0.jpg" alt="tlo"/>
                    </div>
                    <div
                        style={{background:this.state.colors[1].toString()}}
                        className="demo_tile"
                        onMouseOver={console.log("bla")}>

                        <p style={{color: this.state.colors[0].toString()}} className="demo_text">Demo text</p>
                    </div>
                </div>

                <button>Zapisz</button>

                {this.state.colorPicker ?
                    (<div onClick={this.closeColorPicker} className="color_picker_container">
                        <SketchPicker
                            color={this.state.colors[this.state.actualColor]}
                            onChange={this.changeColor}
                            onChangeComplete={this.changeColorComplete}

                        />
                    </div>)
                    : null}

            </form>
        );
    }

}

export default SettingsPanel;