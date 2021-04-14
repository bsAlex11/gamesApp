import { Button } from "@material-ui/core";
import React, { FunctionComponent } from "react";

import styles from './styles.scss';

type TProps = {
  name?: string;
  description?: string;
  onCancel: () => void;
}

const SelectedGameDetails: FunctionComponent<TProps> = ({ name, description, onCancel }) => (
  <>
    <p className={styles.info}>Title: {name}</p>
    <p className={styles.info}>Description: {description}</p>
    <div className={styles.buttonsContainer}>
      <Button
        variant="contained"
        color="secondary"
        onClick={onCancel}
      >
        Cancel
      </Button>
      <Button variant="contained" color="primary">
        Confirm
      </Button>
    </div>  
  </>  
);

export default SelectedGameDetails;
