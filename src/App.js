import React, {useState} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import './style/app.scss';
import {BrowserRouter as Router} from "react-router-dom";
import {AppHeader} from "./components/header/app-header";
import {AppNavigation} from "./components/navigation/app-navigation";
import {AppContent} from "./components/app-content/app-content";
import {cartReducer} from "./store/reducers/cart-reducer";
import {ordersReducer} from "./store/reducers/orders-reducer";


const rootReducer = combineReducers({
    orders: ordersReducer,
    cart: cartReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
    const [isNavOpen, setIsNavOpen] = useState(true);
    return (
        <Provider store={store}>
            <Router>
                <div className={"app"}>
                    <AppHeader toggleNavigation={() => setIsNavOpen(!isNavOpen)}/>
                    <div className={"app-wrapper"}>
                        <AppNavigation isNavOpen={isNavOpen}/>
                        <AppContent/>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
