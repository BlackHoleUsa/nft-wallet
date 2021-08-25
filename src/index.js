import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './global.css';
import NftWallet from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

import './fonts/Helvetica.ttf';
import './fonts/SF-Pro-Text-Bold.otf';
import './fonts/SF-Pro-Text-Medium.otf';
import './fonts/SF-Pro-Text-Regular.otf';
import './fonts/SF-Pro-Text-Semibold.otf';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './redux/store';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <NftWallet />
        </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//  "homepage": "http://blackhole@sardartufani.com/projects/kyle-ico",
//   "homepage": "http://sarashaj@sa-ra.digital/saratoken",

reportWebVitals();
