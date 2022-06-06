import React from 'react';
import './styles/index.scss';
import { useSelector } from 'react-redux';
import { TransactionType, CombinedState } from '../../utils/type';
import { TRANSACTIONS } from '../../utils/constants';

/*

  Component Name: Transaction
  Usages: 
    - Component that shows a table with all the transactions data
    
*/

const Transaction: React.FC = () => {
  const transactions:TransactionType[] = useSelector((state:CombinedState) => state.TransactionsReducer);
  return(
    <div className="fe-wallet__transactions">
      <span>
        {TRANSACTIONS.HEADING}
      </span>
      <div className="fe-wallet__transactions__container">
        <table>
          <thead>
            <tr>
              { TRANSACTIONS.HEADER.map((title, index) => <th key={`${title}-${index}`}>{title}</th>)}
            </tr>
          </thead>
          <tbody>
            {transactions?.map(row => 
              <tr key={`${row.action}-${row.ticker}`}>
                <td>{row.date?.toLocaleDateString("es-ES")}</td>
                <td>{row.action} {row.amount} {row.ticker}</td>
                <td>{row.via}</td>
                <td>{row.status}</td>
                <td>{row.comision}</td>
                <td>{row.total?.toFixed(2)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Transaction;