import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

// css
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// app
import App from './App';

//multilanguage
import global_en from "./translatons/en/global.json";
import global_cn from "./translatons/cn/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

//Initializing i18next
const userLanguage = navigator.language || navigator.userLanguage;
console.log(userLanguage)
i18next.init({
  interpolation: {escapeValue: false},
  lng: 'en',
  resources: {
    en: {
      global: global_en
    },
    cn: {
      global: global_cn
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>
);

