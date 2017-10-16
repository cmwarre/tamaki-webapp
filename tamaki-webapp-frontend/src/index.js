import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import router from './router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <Routes history={browserHistory} />,
//   document.getElementById('root')
// );

ReactDOM.render(
<Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);

registerServiceWorker();
