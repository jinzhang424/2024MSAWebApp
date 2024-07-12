import "./ItemBox.css";
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import MilkTeaOrderDialog from "./MilkTeaOrderDialog";
import MilkShakeOrderDialog from "./MilkShakeOrderDialog";
import { useState } from "react";

export interface ItemBoxInfo {
    name : string;
    price : number;
    imgUrl : string;
    imgAlt : string;
    type: 'MilkTea' | 'MilkShake';
}

export interface ItemBoxProps {
    items : ItemBoxInfo[];
}

export interface ItemBoxComponentProps extends ItemBoxProps {
    onOkMilkTea: (itemName: string, itemPrice: number, sweetness: number, temperature: number, toppings: string[], hasIce: boolean) => void;
    onOkMilkShake: (toppings: string[]) => void;
}

export default function ItemBox( { items, onOkMilkTea, onOkMilkShake } : ItemBoxComponentProps ) {


    const [open, setOpen] = React.useState(false);
    const [selectedItemName, setSelectedItemName] = useState("");
    const [selectedItemPrice, setSelectedItemPrice] = useState(0);
    const [selectedItemType, setSelectedItemType] = useState<'MilkTea' | 'MilkShake'>('MilkTea');

    const handleClickOpen = (itemName: string, itemPrice: number, itemType: 'MilkTea' | 'MilkShake') => {
        setSelectedItemName(itemName);
        setSelectedItemPrice(itemPrice);
        setSelectedItemType(itemType);
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    const handleMilkTeaOk = (sweetness: number, temperature: number, toppings: string[], hasIce: boolean) => {
        onOkMilkTea(selectedItemName, selectedItemPrice, sweetness, temperature, toppings, hasIce);
        setOpen(false);
    };

    const handleMilkShakeOk = (toppings: string[]) => {
        onOkMilkShake(toppings);
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const renderDialog = () => {
        switch (selectedItemType) {
            case 'MilkTea':
                return <MilkTeaOrderDialog itemName={selectedItemName} onOk={handleMilkTeaOk} onCancel={handleCancel} />;
            case 'MilkShake':
                return <MilkShakeOrderDialog itemName={selectedItemName} onOk={handleMilkShakeOk} onCancel={handleCancel} />;
            default:
                return null;
        }
    };

    const theme = createTheme();

    theme.typography.h5 = {
        fontWeight: "600",
        fontSize: "18px"
    }

    theme.typography.body1 = {
        fontWeight: "500"
    }


    return (
        <div className="itemBoxContainer">
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => handleClickOpen(item.name, item.price, item.type)} className="item">
                        <img src={item.imgUrl} alt={item.imgAlt} className="itemImg"/>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="body1">
                                {item.price}$
                            </Typography>
                        </ThemeProvider>
                    </div>
                )
            })}

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose} className="orderDialogContainer">
                {renderDialog()}
            </Dialog>
        </div>
    )
}