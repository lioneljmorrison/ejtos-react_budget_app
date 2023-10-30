import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./Curriency.css";

const Currency = () => {
    const { dispatch, currencies, currency } = useContext(AppContext);
    const changeCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }

    return (
        <div className="alert currency">
            <select defaultValue={currency} onChange={(event) => changeCurrency(event.target.value)}>
                {currencies.map((option, index) => {
                    return (
                        <option key={index} value={option.symbol} >
                            {option.symbol} {option.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default Currency;