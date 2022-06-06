import React from 'react';
import './styles/index.scss';

/*

  Component Name: Spinner
  Usages: 
    - Component that shows a spinner.
    - Shows WIP
*/

const Spinner: React.FC<{}> = () => 
  <div className="fe-wallet__spinner-container">
    <div className="fe-wallet__spinner-container__content"></div>
  </div>

export default Spinner;