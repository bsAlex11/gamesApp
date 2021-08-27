import React from 'react';
import {FunctionComponent} from 'react';
import {Control} from 'react-hook-form';
import CustomField from '../../../../components/form-fields/custom-field/CustomField';

import styles from './EventDetailsForm.module.scss';

type TProps = {
  control: Control<any>;
};

const EventDetailsForm: FunctionComponent<TProps> = ({control}: TProps) => {
  return (
    <>
      <div className={styles.dateWrapper}>
        <CustomField
          name='dateTime'
          control={control}
          componentProps={{
            componentType: 'date-time',
            label: 'Pick a time and date'
            // error: false,
            // helperText: 'Error'
          }}
        />
      </div>
      <div>
        <CustomField
          name='location'
          control={control}
          componentProps={{
            componentType: 'input',
            variant: 'standard',
            label: 'Enter a location'
            // error: false,
            // helperText: 'Error'
          }}
        />
      </div>
    </>
  );
};

export default EventDetailsForm;
