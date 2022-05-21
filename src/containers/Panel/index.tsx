import React, { useState, useEffect, useCallback } from 'react';
import './styles/index.scss';
import { CurrencyType, RateType, CombinedState } from '../../utils/type';
import { setCurrenciesData } from "../../actions/currencyAction";
import { setRatesData } from "../../actions/rateAction";
import { ENDPOINTS } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { requestHandler } from '../../utils/axios';
import Main from '../../components/Main';

type Props = {};

const Panel: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [isLoadingCurrenciesData, setLoadingCurrenciesData] = useState<boolean>(false);
  const [isLoadingRatesData, setLoadingRatesData] = useState<boolean>(false);
  const currencies:CurrencyType[]  = useSelector((state:CombinedState) => state.CurrencyReducer);
  const rates:RateType[]  = useSelector((state:CombinedState) => state.RateReducer);

  const fetchCurrenciesData = useCallback( async() => {
    setLoadingCurrenciesData(true);
    requestHandler(ENDPOINTS?.CURRENCIES)
      .then((data) => {
        dispatch(setCurrenciesData(data));
        setLoadingCurrenciesData(false);
      });
  }, [dispatch]);

  const fetchRatesData = useCallback( async() => {
    setLoadingRatesData(true);
    requestHandler(ENDPOINTS?.RATES)
      .then((data) => {
        dispatch(setRatesData(data));
        setLoadingRatesData(false);
      });
  }, [dispatch]);
  
  useEffect(() => {
    // Cheking if the info was not already loaded in the past.
    !currencies.length && !isLoadingCurrenciesData && fetchCurrenciesData();
    !rates?.length && !isLoadingRatesData && fetchRatesData();
  }, [currencies, rates, fetchCurrenciesData, fetchRatesData, isLoadingCurrenciesData, isLoadingRatesData])

  return (
    <div className="fe-wallet__panel">
      <Main currencies={currencies} rates={rates} />
    </div>
  )
};

export default Panel;