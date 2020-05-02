import React from 'react'
import { connect } from 'react-redux';
import { loadLanguage } from '../../actions';
import i18 from '../../assets/i18';
import './lang-selector.css';

const LanguageSelector = (props) => {
  const { dispatch , jsonData} = props;
  const changeLanguage = (event) => {
    const val = event.target.value;
    dispatch(loadLanguage(i18(val), val));
  }

  return (
    <div className="lang-selector">
        <p>{jsonData.langSelectorTitle}</p>
      <input type="radio" onChange={changeLanguage} value="en" name="language" defaultChecked/> English
      <input type="radio" onChange={changeLanguage} value="es" name="language"/> Spanish
    </div>
  )
}



const mapStateToProps = (state) => {
  console.log('stateee', state);

  return {
  lang: state.langReducer.lang,
  jsonData: state.langReducer.jsonData
  }
};

export default connect(mapStateToProps)(LanguageSelector);