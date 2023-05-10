import Select from '@mui/material/Select';
import React from 'react';
import { Controller } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';

const InputController = (props) => {
	const {
		name, control, value, rules, options = [], ...rest
	} = props;

	return (
    <Controller
      key={name}
      control={control}
      name={name}
      defaultValue={value}
      rules={rules}
      render={({ field: { onChange, onBlur, value: newValue } }) => (
        <Select
          {...rest}
          id={name}
          key={rest.id}
          value={newValue || ""}
          onChange={(event) => {
            onChange(event);
            rest.onChange?.(event);
          }}
          onBlur={(event) => {
            onBlur(event);
            rest.onBlur?.(event);
          }}
        >
          {options.map((val) => (
            <MenuItem value={val.value}>{val.label}</MenuItem>
          ))}
        </Select>
      )}
    />
  );
}
export default InputController;
