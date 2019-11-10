import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from "@material-ui/core";
import "./SelectBox.css";

const SelectBox = props => {
  const { options, selectedIndex = 0, onChange, label } = props;
  const [value, setValue] = React.useState(options[selectedIndex]);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(
      inputLabel && inputLabel.current ? inputLabel.current.offsetWidth : 0
    );
  }, []);

  function handleChange(event) {
    setValue(event.target.value);
    onChange(event);
  }

  return (
    <FormControl className="SelectBox" variant="outlined">
      {label && (
        <InputLabel ref={inputLabel} htmlFor="outlined-select-box">
          {label}
        </InputLabel>
      )}
      <Select
        value={value}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth}
            name="age"
            id="outlined-select-box"
          />
        }
      >
        {options.map((option, index) => (
          <MenuItem dense value={option} key={index}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectBox.propTypes = {
  options: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SelectBox;
