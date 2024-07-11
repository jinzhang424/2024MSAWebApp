import "./MenuSelection.css";
import ItemBox from "./ItemBox";
import { ItemBoxProps } from "./ItemBox";
import Typography from "@mui/material/Typography";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

interface MenuSelectionProps {
    ItemBoxPropsArray: ItemBoxProps[];
    ItemBoxCategoryNames : string[];
}

interface OrderItemsInfo {
    itemName: string;
    itemPrice: number;
    sweetness: number;
    temperature: number;
    toppings: string[];
    hasIce: boolean;
}

export default function MenuSelection({ ItemBoxPropsArray, ItemBoxCategoryNames}: MenuSelectionProps) {

    const [selectedCategory, setSelectedCategory] = useState(-1);
    const [orderItems, setOrderItems] = useState<OrderItemsInfo[]>([]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
        setOpen(false);
        }
    };

    const handleChange = (event: any) => {
        setSelectedCategory(event.target.value);
    };

    const handleRemoveItem = (index: number) => {
        setOrderItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const handleItemBoxOk = (itemName: string, itemPrice: number, sweetness: number, temperature: number, toppings: string[], hasIce: boolean) => {
        const newItem: OrderItemsInfo = {
            itemName,
            itemPrice,
            sweetness,
            temperature,
            toppings,
            hasIce
        };
        setOrderItems([...orderItems, newItem]);
    };

    const theme = createTheme();

    theme.typography.body1 = {
        fontWeight: '600',
        fontSize: '17px'
    }

    theme.typography.body2 = {
        fontWeight: '500',
        fontSize: '16px'
    }

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
                    <Typography variant="h3" style={{color: 'rgb(194, 133, 75)'}} className="menuHeader">Menu</Typography>
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
                    <div key={index} className={ selectedCategory == index || selectedCategory == -1 ? "ItemBoxes" : "Hidden ItemBoxes"}>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5" className="menuHeader">
                                {ItemBoxCategoryNames[index]}
                            </Typography>
                        </ThemeProvider>
                        <ItemBox items={data.items} onOk={handleItemBoxOk}/>
                    </div>
                ))}
            </div>
            
            <div className="checkoutButton">
                <Button variant="contained" size="large" style={{ backgroundColor: 'rgb(231, 181, 106)'}} onClick={handleClickOpen}>
                    Checkout ({orderItems.length})
                </Button>
            </div>

            <div className="checkoutDialog">
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Checkout</DialogTitle>
                    <DialogContent>
                        <ul>
                            {orderItems.map((item, index) => (
                                <div className="orderItemContainer">
                                    <li key={index} className="orderItems">
                                    <ThemeProvider theme={theme}>
                                        <Typography variant="body1">
                                            {item.itemName}:  ${item.itemPrice}
                                        </Typography>
                                    </ThemeProvider>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant="body2">
                                            Sweetness: {item.sweetness} | Temperature: {item.temperature} | Toppings: {item.toppings.join(', ')} | Ice: {item.hasIce ? 'Yes' : 'No'}
                                        </Typography>
                                    </ThemeProvider>
                                    <Button style={{color: 'rgb(231, 181, 106)'}} onClick={() => handleRemoveItem(index)} startIcon={<DeleteIcon />} className="removeButton"></Button>
                                </li>
                                </div>

                            ))}
                        </ul>
                    </DialogContent>
                    <DialogActions>
                        <div className="totalCost">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body2">
                                    Total: {orderItems.reduce((total, item) => total + item.itemPrice, 0)}$
                                </Typography>
                            </ThemeProvider>
                        </div>
                        <Button onClick={handleClose} style={{ color: 'rgb(231, 181, 106)' }}>Cancel</Button>
                        <Button variant="contained" onClick={handleClose} style={{ backgroundColor: 'rgb(231, 181, 106)'}}>Checkout</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}