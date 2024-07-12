import DialogContent from '@mui/material/DialogContent';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import MilkShakeToppingsSelect from "./MilkShakeToppingsSelect" ;
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from "@mui/material";

// Responsible for the milkshake dialog and sending the order info (toppings) to ItemBox

interface OrderDialogProps {
    itemName: string;
    onOk: (toppings: string[]) => void;
    onCancel: () => void;
}

export default function MilkTeaOrderDialog({itemName, onOk, onCancel}: OrderDialogProps) {

    const [toppings, setToppings] = useState<string[]>([]);

    const handleToppingsChange = (event: SelectChangeEvent<typeof toppings>) => {
        const { target: { value } } = event;
        setToppings(typeof value === 'string' ? value.split(',') : value);
    };

    const handleOkClick = () => {
        onOk(toppings);
    };

    return (
        <div>
            <DialogTitle>{itemName}</DialogTitle>
                <DialogContent className="orderDialogContent">
                    <MilkShakeToppingsSelect toppings={toppings} onToppingsChange={handleToppingsChange}/>
                </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={handleOkClick}>Ok</Button>
            </DialogActions>
        </div>
    )
}