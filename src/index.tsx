import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import { addLocaleData, IntlProvider } from 'react-intl';
import { IntlProvider } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';
// import csLocaleData from 'react-intl/locale-data/cs';
import csMessages from './locale/cs.json';

// English and Czech (add more langs here)
// addLocaleData(enLocaleData);
// addLocaleData(csLocaleData);

const currentLocale = 'cs';
const translations = { cs: {} };

ReactDOM.render(
  <IntlProvider locale={currentLocale} messages={csMessages}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
