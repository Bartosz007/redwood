import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {store} from "./storage/storage"

ReactDOM.render(
    <Provider store={store}>
        <App/>,
    </Provider>,
    document.querySelector(".root")
);

reportWebVitals();
