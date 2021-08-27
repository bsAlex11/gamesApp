import {TextField} from '@material-ui/core';
import React, {FunctionComponent} from 'react';
import {Controller, ControllerRenderProps} from 'react-hook-form';

const CustomField: FunctionComponent<any> = ({
  componentProps: {componentType, ...restOfComponentProps},
  name,
  control
}) => {
  const getComponent = (field: ControllerRenderProps) => {
    switch (componentType) {
      case 'date-time':
        return (
          <TextField
            {...field}
            type='datetime-local'
            {...restOfComponentProps}
          />
        );
      case 'input':
      default:
        return <TextField {...field} {...restOfComponentProps} />;
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({field}) => getComponent(field)}
    />
  );
};

export default CustomField;
