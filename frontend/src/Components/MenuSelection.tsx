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
import { useState } from "react"

interface MenuSelectionProps {
    ItemBoxPropsArray: ItemBoxProps[];
    ItemBoxCategoryNames : string[];
}

export default function MenuSelection({ ItemBoxPropsArray, ItemBoxCategoryNames}: MenuSelectionProps) {

    const [selectedValue, setSelectedValue] = useState(0);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

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

    theme.typography.h5 = {
        fontSize: '1.4rem',
        '@media (max-width:600px)': {
          fontSize: '1.2rem',
        },
    }

    return (
        <div className="MenuSelectionContainer">

            <div className="selectorContainer">
                <ThemeProvider theme={theme}>
                    <Typography variant="h3">Menu</Typography>
                </ThemeProvider>

                <FormControl sx={{ m: 1, minWidth: 140 }}>
                    <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
                    <Select native defaultValue="" id="grouped-native-select" label="Grouping" onChange={handleChange}>
                        <option aria-label="None" value={-1} />
                        <optgroup label="Teas">
                            <option value={0}>Milk Tea</option>
                        </optgroup>
                        <optgroup label="Desserts">
                            <option value={1}>Milk Shakes</option>
                        </optgroup>
                    </Select>
                </FormControl>
            </div>

            <div className="ItemBoxesContainer">
                {ItemBoxPropsArray.map((data, index) => (
                    <div key={index} className={ selectedValue == index || selectedValue == -1 ? "ItemBoxes" : "Hidden ItemBoxes"}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5" className="menuHeader">
                                {ItemBoxCategoryNames[index]}
                            </Typography>
                        </ThemeProvider>
                        <ItemBox items={data.items} />
                    </div>
                ))}
            </div>
        </div>
    )
}