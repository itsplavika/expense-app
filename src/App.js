import React from 'react';

import Header from './components/header';
import ChartComponent from './components/chart';
import Table from './components/table'
import Footer from './components/footer';

import './App.css';
// import {i18n} from 'i18next';
// import { useTranslation, initReactI18next } from 'react-i18next';

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources: {
//       en: {
//         translation: {
//           "Welcome to React": "Welcome to React and react-i18next"
//         }
//       }
//     },
//     lng: "en",
//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false
//     }
//   });

function App() {
  //const { t } = useTranslation();
  return (
    <div className="app">
      <Header />
      <main>
        {/* <h1>{t('Expense App')}</h1> */}
        <h1>Expense App</h1>
        <ChartComponent/>
        <div className="app-table-wrapper">
          <Table/>
          <p className="app-note">** Click on table cell to modify values</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
