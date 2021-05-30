import React from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';
import { history } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Router history={history}>
                <Routes />
            </Router>
        </div>
    );
}
App.displayName = 'App';
export default App;
