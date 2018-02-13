import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/index';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';





// import './styles/global.sass';



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
