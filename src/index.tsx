import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: en,
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

