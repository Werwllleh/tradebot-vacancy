import React from 'react';
import CurrencyIcon from "./ui/currency-icon";
import {useValuesStore} from "../store/values-store";

const Monitor = () => {

  const values = useValuesStore((state) => state.data);


  return (
    <div className="monitor">
      <div className="monitor__body">
        <div className="monitor__values">
          <div className="monitor__values-left">
            <p className="monitor__values-left-name monitor__name" title={'Trading capital'}>Trading capital</p>
            <div className="monitor__values-left-value">
              <span>{values?.trading_capital}</span>
              <span>{values?.trading_capital_currency}</span>
            </div>
          </div>
          <div className="monitor__values-right">
            <ul className="monitor__values-list">
              <li className="monitor__values-list-item">
                <p className="monitor__values-list-name monitor__name" title={'Balance'}>Balance:</p>
                <span className="monitor__values-list-value">
                  {values.balance && values.balance.toLocaleString("ru")}
                  <span className="monitor__values-currency"><CurrencyIcon /></span>
                </span>
              </li>
              <li className="monitor__values-list-item">
                <p className="monitor__values-list-name monitor__name" title={'On hold'}>On hold:</p>
                <span className="monitor__values-list-value">
                  {values.on_hold && values.on_hold.toLocaleString("ru")}
                  <span className="monitor__values-currency"><CurrencyIcon /></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
