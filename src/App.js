import React from 'react';

import Header from './components/header';
import ChartComponent from './components/chart';
import Table from './components/table'
import Footer from './components/footer';
import { connect } from 'react-redux';

import LanguageSelector from './components/lang-selector'
import './assets/i18';
import './App.css';

function App({jsonData}) {

  return (
    <div className="app">
      <Header />
      <main>
        <h1>{jsonData.appTitle}</h1>
        <LanguageSelector />

        <ChartComponent/>
        <div className="app-table-wrapper">
          <Table/>
          <p className="app-note">** {jsonData.note}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  jsonData: state.langReducer.jsonData,
});

export default connect(mapStateToProps)(App);