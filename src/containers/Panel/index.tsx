import React, { useState, useCallback, useEffect } from 'react'
import './styles/index.scss'
import {
  CurrencyType,
  RateType,
  BalanceType,
  CombinedState,
} from '../../utils/type'
import { setCurrenciesData, setRatesData, setBalanceData } from '../../actions'
import { ENDPOINTS } from '../../utils/constants'
import { withTranslation, WithTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import MaintenancePage from '../../components/MaintenancePage'
import { requestHandler } from '../../utils/axios'
import Main from '../../components/Main'

type Props = WithTranslation

/*

  Component Name: Panel
  Usages: 
    - Panel Page
    
*/

const Panel: React.FC<Props> = ({ t }) => {
  const dispatch = useDispatch()
  const [isLoadingCurrenciesData, setLoadingCurrenciesData] =
    useState<boolean>(false)
  const [isLoadingRatesData, setLoadingRatesData] = useState<boolean>(false)
  const [isLoadingBalanceData, setLoadingBalanceData] = useState<boolean>(false)
  const [isErrorRatesData, setErrorRatesData] = useState<boolean>(false)
  const [isErrorCurrenciesData, setErrorCurrenciesData] =
    useState<boolean>(false)
  const [isErrorBalanceData, setErrorBalanceData] = useState<boolean>(false)
  const currencies: CurrencyType[] = useSelector(
    (state: CombinedState) => state.CurrencyReducer,
  )
  const rates: RateType[] = useSelector(
    (state: CombinedState) => state.RateReducer,
  )
  const balances: BalanceType[] = useSelector(
    (state: CombinedState) => state.BalanceReducer,
  )

  const fetchCurrenciesData = useCallback(async () => {
    if (
      isLoadingCurrenciesData ||
      !!currencies?.length ||
      isErrorCurrenciesData
    )
      return
    setLoadingCurrenciesData(true)
    setErrorCurrenciesData(false)
    requestHandler(ENDPOINTS?.CURRENCIES)
      .then(data => {
        dispatch(setCurrenciesData(data))
        setLoadingCurrenciesData(false)
      })
      .catch(() => {
        setErrorCurrenciesData(true)
        setLoadingCurrenciesData(false)
      })
  }, [dispatch, isLoadingCurrenciesData, currencies, isErrorCurrenciesData])

  const fetchRatesData = useCallback(async () => {
    if (isLoadingRatesData || !!rates?.length || isErrorRatesData) return
    setLoadingRatesData(true)
    setErrorBalanceData(false)
    requestHandler(ENDPOINTS?.RATES)
      .then(data => {
        dispatch(setRatesData(data))
        setLoadingRatesData(false)
      })
      .catch(() => {
        setErrorRatesData(true)
        setLoadingRatesData(false)
      })
  }, [dispatch, isLoadingRatesData, rates, isErrorRatesData])

  const fetchBalanceData = useCallback(async () => {
    if (isLoadingBalanceData || !!balances?.length || isErrorBalanceData) return
    setLoadingBalanceData(true)
    setErrorBalanceData(false)
    requestHandler(ENDPOINTS?.BALANCES)
      .then(data => {
        dispatch(setBalanceData(data))
        setLoadingBalanceData(false)
      })
      .catch(() => {
        setErrorBalanceData(true)
        setLoadingBalanceData(false)
      })
  }, [dispatch, isLoadingBalanceData, balances, isErrorBalanceData])

  useEffect(() => {
    // Cheking if the info was not already loaded in the past.
    fetchCurrenciesData()
    fetchRatesData()
    fetchBalanceData()
  })

  return (
    <div className="fe-wallet__panel">
      {isErrorCurrenciesData || isErrorRatesData || isErrorBalanceData ? (
        <MaintenancePage pageName={t('pages.panel')} isError={true} />
      ) : (
        <Main currencies={currencies} rates={rates} balances={balances} />
      )}
    </div>
  )
}

export default withTranslation()(Panel)
