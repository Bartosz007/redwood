import {store} from "../../storage/storage";


function AlertScreen(data) {

    return (
        <div className="alert_screen">
            <h3 className="alert_message"> {data.text} </h3>
        </div>
    );

}

export default AlertScreen;