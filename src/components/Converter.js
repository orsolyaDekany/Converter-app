import './Converter.css';
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Amount from './Amount';
import ConverterContext from '../contexts/ConverterContext';
import PremiumLabel from './PremiumLabel';

function Converter (props){
  const {
    cryptoLabel,
    cryptoShortLabel,
    exchangeRate,
    focusOnMount = false,
    } = props
  
  const [eurosValue, setEurosValue] = useState(0);
  const { premium } = useContext(ConverterContext);

  const handleChange = (e) => {
    setEurosValue(e.target.value);
  };

  const cryptoValue = eurosValue * exchangeRate;

  return (
    <form className="Converter">
      <header className="Converter__header">
        <h1 className="Converter__title">Euros to {cryptoLabel}</h1>
        {premium && <PremiumLabel />}
      </header>

      <Amount label="EUR" onChange={handleChange} value={eurosValue} focusOnMount={focusOnMount} />
      
      <Amount label={cryptoShortLabel} value={cryptoValue} readOnly />
    </form>
  );
}

Converter.propTypes = {
  cryptoLabel: PropTypes.string.isRequired,
  cryptoShortLabel: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,

  focusOnMount: PropTypes.bool,
  onConvert: PropTypes.func,
};

export default Converter;
