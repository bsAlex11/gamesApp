import React, {FunctionComponent} from 'react';
import {Control} from 'react-hook-form';
import CustomField from '../../../../components/form-fields/custom-field/CustomField';

type TProps = {
  control: Control<any>;
};

const PrivacyFormSection: FunctionComponent<TProps> = ({control}) => {
  return (
    <>
      <div>
        <CustomField
          name='privateEvent'
          control={control}
          componentProps={{
            componentType: 'radio',
            label: 'Private event',
            options: ['yes', 'no']
          }}
        />
      </div>
      <div>
        <CustomField
          name='showLocation'
          control={control}
          componentProps={{
            componentType: 'radio',
            label: 'Show event exact location',
            options: ['yes', 'no']
          }}
        />
      </div>
    </>
  );
};

export default PrivacyFormSection;
