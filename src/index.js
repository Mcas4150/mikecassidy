import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';



import routes from './routes';


// import './styles/global.sass';



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
