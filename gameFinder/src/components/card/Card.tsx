import React, {FunctionComponent, ReactNode} from 'react';

import styles from './styles.scss';

type TProps = {
  title: string;
  subtitle?: string;
  isCardDisabled?: boolean;
  renderContent: () => ReactNode;
};

const Card: FunctionComponent<TProps> = ({
  title,
  subtitle,
  isCardDisabled,
  renderContent
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideContainer}>
        <h3 className={styles.title}>{title}</h3>
        {
          subtitle && ( 
            <p className={styles.subtitle}>{subtitle}</p>
          )
        }
      </div>
      <div className={styles.content}>
        {
          renderContent()
        }
      </div>
        {
          isCardDisabled &&
            <div className={styles.overlay}/>
        }
    </div>
  );
};

export default Card;
