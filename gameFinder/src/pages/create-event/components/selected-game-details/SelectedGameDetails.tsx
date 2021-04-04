import React, { FunctionComponent } from "react";

import styles from './styles.scss';

type TProps = {
  name?: string;
  description?: string;
}

const SelectedGameDetails: FunctionComponent<TProps> = ({ name, description }) => (
  <>
    <p className={styles.info}>Title: {name}</p>
    <p className={styles.info}>Description: {description}</p>
    <div>

    </div>  
  </>  
);

export default SelectedGameDetails;
