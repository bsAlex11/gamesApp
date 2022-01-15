import React from 'react';
import {FunctionComponent} from 'react';
import {Control} from 'react-hook-form';
import CustomField from '../../../../components/form-fields/custom-field/CustomField';
import {PLAYERS_SELECT_OPTIONS} from './constants';

import styles from './EventDetailsFormSection.module.scss';

type TProps = {
  control: Control<any>;
};

const EventDetailsFormSection: FunctionComponent<TProps> = ({
  control
}: TProps) => {
  return (
    <>
      <div className={`${styles.dateWrapper} ${styles.field}`}>
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
      <div className={styles.field}>
        <CustomField
          name='location'
          control={control}
          componentProps={{
            componentType: 'input',
            variant: 'outlined',
            label: 'Enter a location'
            // error: false,
            // helperText: 'Error'
          }}
        />
      </div>
      <div className={styles.field}>
        <CustomField
          name='numberOfPlayers'
          control={control}
          componentProps={{
            componentType: 'select',
            variant: 'standard',
            selectLabel: 'Number of players',
            options: PLAYERS_SELECT_OPTIONS,
            autoWidth: true
          }}
        />
      </div>
      <div className={styles.field}>
        <CustomField
          name='eventDetails'
          control={control}
          componentProps={{
            componentType: 'input',
            multiline: true,
            variant: 'outlined',
            label: 'Event details',
            placeholder: 'Details'
          }}
        />
      </div>
    </>
  );
};

export default EventDetailsFormSection;
