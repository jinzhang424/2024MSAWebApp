import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 267 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={3}
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