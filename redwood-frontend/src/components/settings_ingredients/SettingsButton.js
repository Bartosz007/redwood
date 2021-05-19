function SettingButton(props) {
    return (
        <div className="menu_button" onClick={props.showSettingsMenu}>
            <img src="../icons/menu_button.svg" alt="Menu"/>
        </div>
    );
}

export default SettingButton;
