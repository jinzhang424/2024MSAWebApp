import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

const marks = [
    {
        value: 1,
        label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
  ];

function valuetext(value: number) {
  return `${value}`;
}

interface DiscreteSliderProps {
  value: number;
  onChange: (event: Event, newValue: number | number[]) => void;
}

export default function DiscreteSlider({ value, onChange }: DiscreteSliderProps) {

  return (
    <Box sx={{ width: 267 }}>
      <Slider
        aria-label="Value"
        value={value}
        onChange={onChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={5}
      />
    </Box>
  );
}