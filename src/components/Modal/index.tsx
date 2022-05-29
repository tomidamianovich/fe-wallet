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
  handleModalVisibility: () => void
};

const Modal: React.FC<Props> = ({
  header,
  content,
  actions,
  handleModalVisibility
}) => {
  return(
    <div className="fe-wallet__modal">
      <div className="fe-wallet__modal__content">
        <div className="fe-wallet__modal__content__header">
          <h2>{header}</h2>
          <span
            className="fe-wallet__modal__content__header__close" 
            onClick={handleModalVisibility}>
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