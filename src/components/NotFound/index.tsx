import React from 'react';
import './styles/index.scss';
import { WORDINGS } from "../../utils/constants"

type Props = {};

const NotFound: React.FC<Props> = () => 
  <header className="fe-wallet__not-found">
    {WORDINGS.NOT_FOUND}
  </header>
;

export default NotFound;