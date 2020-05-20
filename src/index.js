import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <Suspense fallback={(<div>Loading</div>)}>
        <App />
    </Suspense>
    , document.getElementById('root'));
