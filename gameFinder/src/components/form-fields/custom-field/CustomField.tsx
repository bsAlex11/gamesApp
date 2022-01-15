import {
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Theme,
  createStyles,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import React, {FunctionComponent} from 'react';
import {Controller, ControllerRenderProps} from 'react-hook-form';
import {TSelectOption} from '../../../types';
import styles from './styles.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220
    }
  })
);

const CustomField: FunctionComponent<any> = ({
  componentProps: {
    componentType,
    options,
    selectLabel,
    ...restOfComponentProps
  },
  name,
  control
}) => {
  const classes = useStyles();
  const getComponent = (field: ControllerRenderProps) => {
    switch (componentType) {
      case 'date-time':
        return (
          <TextField
            {...field}
            type='datetime-local'
            value={field.value ?? ''}
            {...restOfComponentProps}
          />
        );

      case 'select':
        return (
          <FormControl className={classes.formControl}>
            <InputLabel>{selectLabel}</InputLabel>
            <Select
              {...field}
              {...restOfComponentProps}
              value={field.value ?? ''}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {options?.map(({value, label}: TSelectOption) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      case 'radio':
        return (
          <FormControl component='fieldset'>
            <FormLabel component='legend'>
              {restOfComponentProps.label}
            </FormLabel>
            <RadioGroup row {...field} value={field.value ?? ''}>
              {options.map((option: string) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );

      case 'input':
      default:
        return (
          <TextField
            {...field}
            value={field.value ?? ''}
            {...restOfComponentProps}
          />
        );
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState}) => {
        return (
          <>
            {getComponent(field)}
            <p className={styles.error}>{fieldState.error?.message}</p>
          </>
        );
      }}
    />
  );
};

export default CustomField;
