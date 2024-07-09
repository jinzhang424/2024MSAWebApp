import "./MenuSelection.css";
import ItemBox from "./ItemBox";
import { ItemBoxProps } from "./ItemBox";
import Typography from "@mui/material/Typography";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface MenuSelectionProps {
    ItemBoxPropsArray: ItemBoxProps[];
    ItemBoxCategoryNames : string[];
}

export default function MenuSelection({ ItemBoxPropsArray, ItemBoxCategoryNames}: MenuSelectionProps) {

    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '2.4rem',
        '@media (max-width:600px)': {
          fontSize: '1.8rem',
        },
        '@media (max-width:450px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '3rem',
        },
      };

    return (
        <div className="MenuSelectionContainer">

            <ThemeProvider theme={theme}>
                <Typography variant="h3">Menu</Typography>
            </ThemeProvider>

            <FormControl sx={{ m: 1, minWidth: 140 }}>
                <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                    <option aria-label="None" value="" />
                    <optgroup label="Teas">
                        <option value={1}>Milk Tea</option>
                    </optgroup>
                    <optgroup label="Desserts">
                        <option value={2}>Milk Shakes</option>
                    </optgroup>
                </Select>
            </FormControl>

            <div className="ItemBoxesContainer">
                {ItemBoxPropsArray.map((data, index) => (
                    <div key={index} className="ItemBoxes">
                        <h3>{ItemBoxCategoryNames[index]}</h3>
                        <ItemBox items={data.items} />
                    </div>
                ))}
            </div>
        </div>
    )
}