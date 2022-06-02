import React, { useState, useCallback, useEffect } from 'react';
import './styles/index.scss';
import { CurrencyType, RateType, BalanceType, CombinedState } from '../../utils/type';
import { setCurrenciesData, setRatesData, setBalanceData } from "../../actions";
import { ENDPOINTS, WORDINGS } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import MaintenancePage from "../../components/MaintenancePage"
import { requestHandler } from '../../utils/axios';
import Main from '../../components/Main';

type Props = {};

const Panel: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [isLoadingCurrenciesData, setLoadingCurrenciesData] = useState<boolean>(false);
  const [isLoadingRatesData, setLoadingRatesData] = useState<boolean>(false);
  const [isLoadingBalanceData, setLoadingBalanceData] = useState<boolean>(false);
  const [isErrorRatesData, setErrorRatesData] = useState<boolean>(false);
  const [isErrorCurrenciesData, setErrorCurrenciesData] = useState<boolean>(false);
  const [isErrorBalanceData, setErrorBalanceData] = useState<boolean>(false);
  const currencies:CurrencyType[]  = useSelector((state:CombinedState) => state.CurrencyReducer);
  const rates:RateType[]  = useSelector((state:CombinedState) => state.RateReducer);
  const balances:BalanceType[]  = useSelector((state:CombinedState) => state.BalanceReducer);
  
  const fetchCurrenciesData = useCallback( async() => {
    if (isLoadingCurrenciesData || !!currencies?.length || isErrorCurrenciesData) return
    setLoadingCurrenciesData(true);
    setErrorCurrenciesData(false);
    requestHandler(ENDPOINTS?.RIPIO.CURRENCIES, ENDPOINTS?.RIPIO)
      .then((data) => {
        dispatch(setCurrenciesData(data));
        setLoadingCurrenciesData(false);
      }).catch((res) => {
        setErrorCurrenciesData(true);
        setLoadingCurrenciesData(false);
      })
  }, [dispatch, isLoadingCurrenciesData, currencies, isErrorCurrenciesData]);

  const fetchRatesData = useCallback( async() => {
    if (isLoadingRatesData || !!rates?.length || isErrorRatesData) return
    setLoadingRatesData(true);
    setErrorBalanceData(false);
    requestHandler(ENDPOINTS?.RIPIO.RATES, ENDPOINTS?.RIPIO)
      .then((data) => {
        dispatch(setRatesData(data));
        setLoadingRatesData(false);
      }).catch((res) => {
        setErrorRatesData(true);
        setLoadingRatesData(false)
      })
  }, [dispatch, isLoadingRatesData, rates, isErrorRatesData]);

  const fetchBalanceData = useCallback( async() => {
    if (isLoadingBalanceData || !!balances?.length || isErrorBalanceData) return
    setLoadingBalanceData(true);
    setErrorBalanceData(false);
    requestHandler(ENDPOINTS?.PROD.BALANCES, ENDPOINTS?.PROD)
      .then((data) => {
        dispatch(setBalanceData(data));
        setLoadingBalanceData(false);
      }).catch((res) => {
        setErrorBalanceData(true);
        setLoadingBalanceData(false)
      })
  }, [dispatch, isLoadingBalanceData, balances, isErrorBalanceData]);
  
  useEffect(() => {
    // Cheking if the info was not already loaded in the past.
    fetchCurrenciesData();
    fetchRatesData();
    fetchBalanceData();
  });

  return (
    <div className="fe-wallet__panel">
      { 
        (isErrorCurrenciesData || isErrorRatesData || isErrorBalanceData) 
        ? <MaintenancePage pageName={WORDINGS.PAGES.PANEL} isError={true} />
        : <Main 
          currencies={currencies}
          rates={rates}
          balances={balances}
        />
      }  
    </div>
  )
};

export default Panel;