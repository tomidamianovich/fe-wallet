import React from 'react';
import { BalanceType, CurrencyType, CombinedState } from '../../utils/type';
import { TRANSACTIONS, WORDINGS } from '../../utils/constants';
import { useSelector } from 'react-redux';
import Icon from '../Icon';
import './styles/index.scss';

type Props = 
  BalanceType 
  & CurrencyType 
  & { 
    sell_rate: string,
    handleAction: () => void
  }

const BalanceDetailCard : React.FC<Props> = ({
  amount,
  name,
  symbol,
  url_images,
  sell_rate,
  handleAction
}) => {
  const currentBalance:BalanceType  = useSelector((state:CombinedState) => state.CurrentBalanceReducer);

  const getFormattedAmount = (amount: number, sell_rate: number, currentBal: BalanceType ,decimals: number):string => 
    `${(amount * sell_rate).toFixed(decimals)} ${currentBal?.ticker}`;

  return <div className="fe-wallet__balance-detail__card">
    <div className="fe-wallet__balance-detail__card__header">
      <span className="fe-wallet__balance-detail__card__header__title">
        {WORDINGS.BALANCE.DETAIL.CARD.ACCOUNT} {name}
      </span>
      <button className="fe-wallet__balance-detail__card__header__buy" onClick={handleAction}>
        { TRANSACTIONS.TYPES_TITLES.BUY }
        <Icon icon="more"/>
      </button>
    </div>
    <div className="fe-wallet__balance-detail__card__info">
      <img src={ url_images.image_svg } alt={name}></img>
      <span className="fe-wallet__balance-detail__card__info__values">
        {amount} {symbol}
      </span>
    </div>
    <div className="fe-wallet__balance-detail__card__current-currency">
      <span>&asymp; {getFormattedAmount(amount, parseInt(sell_rate), currentBalance, 2)}</span>
    </div>
  </div>  
}

export default BalanceDetailCard;