import React, { FunctionComponent, ReactNode } from 'react';
import { CircularProgress } from '@material-ui/core';
import { DebounceInput } from 'react-debounce-input';

import styles from './styles.scss';

type TProps = {
  type: string;
  name?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  isLoading?: boolean; 
  debounceTimeout?: number;
  minLength?: number;
  value: string | number;
  displayData: () => ReactNode;
  onChange: (event: any) => void;
}

const AsyncInputField: FunctionComponent<TProps> = ({
  label,
  placeholder,
  name,
  minLength,
  debounceTimeout,
  isLoading,
  value,
  displayData,
  onChange,
}) => {
  return (
    <div>
      {
        label &&
        <span>{label}</span>
      }
      <DebounceInput
        className={styles.input}
        minLength={minLength}
        debounceTimeout={debounceTimeout}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      <div className={styles.contentWrapper}>
        {
          isLoading && (
            <div className={styles.spinnerWrapper}>
              <CircularProgress/>
            </div>  
          )
        }
        {
          displayData && (
            <ul className={styles.listContainer}>
            {
              displayData()
            }
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default AsyncInputField;
