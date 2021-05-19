import React, {useEffect, useState} from 'react';
import {store} from "../../../storage/storage";
import {SketchPicker} from 'react-color';
import {useCookies} from "react-cookie";

import {saveColors} from "../../../scripts/cookiesScripts";
import {changeColors} from "../../../requests/user";
import {
    addFontListener,
    addListOfBlockListeners,
    refreshBetterColors
} from "../../../scripts/betterColors";
import betterAlert from "../../../scripts/betterAlert";
import {isLogged} from "../../../scripts/permissionScripts";

function SettingsPanel() {
    const [colorPicker, setColorPicker] = useState(false);
    const [actualColor, setActualColor] = useState(0);
    const [colors, setColors] = useState([
        {r: 0, g: 0, b: 0, a: 1},
        {r: 255, g: 255, b: 255, a: 0.5},
        {r: 255, g: 255, b: 255, a: 0.7}
    ])
    const [tempColor, setTempColor] = useState({r: 0, g: 0, b: 0, a: 1});
    const dispatch = store.dispatch;
    const [, setCookie] = useCookies(['redwood'])

    const openColorPicker = (number) => {
        setActualColor(number)
        setColorPicker(true)
    }
    const closeColorPicker = (e) => {
        if (e.target.className == "color_picker_container")
            setColorPicker(false)
    }
    const colorHandler = (color) => {
        setTempColor(color.rgb)
        const newColor = colors;
        newColor[actualColor] = color.rgb;
        setColors(newColor)
    };

    const rgbaToString = (rgba) => {
        return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
    }

    const saveChanges = () => {

        const data = {
            fontColor: rgbaToString(colors[0]),
            fgColor: rgbaToString(colors[1]),
            bgColor: rgbaToString(colors[2])
        }
        saveColors(dispatch, setCookie, data)
        const email = store.getState().email;

        if (isLogged()) {

            data.email = email;

            changeColors(data).then(data => {
                betterAlert(data.message);
            })
        }

        refreshBetterColors()

    }

    const onMouseOut = () => {
        document.querySelector(".demo_tile").style.backgroundColor = rgbaToString(colors[1]);
    }

    const onMouseOver = () => {
        document.querySelector(".demo_tile").style.backgroundColor = rgbaToString(colors[2]);
    }

    useEffect(() => {
        document.querySelectorAll(".color_changer").forEach((parent) => {
            addFontListener(parent.querySelector("p"))
        })
        addListOfBlockListeners(document.querySelectorAll("button"))

        refreshBetterColors()
    })

    return (
        <form className="color_form">
            <div className="color_changer">
                <p>Kolor czcionki:</p>
                <button type="button" onClick={() => openColorPicker(0)} className="change_color">
                    Zmień
                </button>
            </div>

            <div className="color_changer">
                <p>Główny kolor:</p>
                <button type="button" onClick={() => openColorPicker(1)} className="change_color">Zmień</button>
            </div>

            <div className="color_changer">
                <p>Pomocniczy kolor:</p>
                <button type="button" onClick={() => openColorPicker(2)} className="change_color">Zmień</button>
            </div>


            <div className="demo_colors">
                <div className="demo_image_container">
                    <img src="../images/redwood0.jpg" alt="tlo"/>
                </div>
                <div
                    style={{background: rgbaToString(colors[1])}}
                    className="demo_tile"
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}>

                    <p style={{color: rgbaToString(colors[0])}} className="demo_text">Demo text</p>
                </div>
            </div>

            <button type="button" onClick={saveChanges}>Zapisz</button>

            {
                colorPicker ?
                    (
                        <div onClick={closeColorPicker} className="color_picker_container">
                            <SketchPicker
                                color={tempColor}
                                onChange={(color) => colorHandler(color)}
                                onChangeComplete={(color) => colorHandler(color)}
                            />
                        </div>
                    )
                    : null
            }

        </form>
    );

}

export default SettingsPanel;
