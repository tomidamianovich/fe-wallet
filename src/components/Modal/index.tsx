import React, { ReactElement } from 'react';
import './styles/index.scss';

type ButtonProps = {
  label: string,
  ariaLabel: string,
  handler: () => void,
  backgroundColor?: string,
  color?: string,
  disabled?: boolean
};

type Props = {
  header: string,
  content: ReactElement<{}>,
  actions?: ButtonProps[],
  handleCloseButton: () => void
};

/*

  Component Name: Modal
  Usages: 
    - Component that allows us to use a general use custom modal

*/


const Modal: React.FC<Props> = ({
  header,
  content,
  actions,
  handleCloseButton
}) => {
  return(
    <div className="fe-wallet__modal">
      <div className="fe-wallet__modal__content">
        <div className="fe-wallet__modal__content__header">
          <h2>{header}</h2>
          <span
            className="fe-wallet__modal__content__header__close" 
            onClick={handleCloseButton}>
              &times;
          </span>
        </div>
        <div className="fe-wallet__modal__content__body">
          <div className="fe-wallet__modal__content__body__content">
            {content}
          </div>
          <div className="fe-wallet__modal__content__body__buttons">
            { actions?.map( action => 
              <button
                key={action.ariaLabel}
                aria-label={action.ariaLabel} 
                onClick={action.handler}
                disabled={action.disabled}
                style={{
                  backgroundColor: action.backgroundColor,
                  color: action.color
                }}>
                {action.label}
              </button>  
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;