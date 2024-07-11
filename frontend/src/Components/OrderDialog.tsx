import DialogContent from '@mui/material/DialogContent';
import { useState } from "react";
import DialogTitle from '@mui/material/DialogTitle';
import Slider from "./Slider";
import MultipleSelectCheckmarks from "./ToppingsSelect" ;
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { SelectChangeEvent } from "@mui/material";

// Responsible for the dialog and sending the order info (sweetness, temperature, toppings, hasIce) to ItemBox

interface OrderDialogProps {
    itemName: string;
    onOk: (sweetness: number, temperature: number, toppings: string[], hasIce: boolean) => void;
    onCancel: () => void;
}

export default function OrderDialog({itemName, onOk, onCancel}: OrderDialogProps) {

    const [sweetness, setSweetness] = useState<number>(3);
    const [temperature, setTemperature] = useState<number>(3);
    const [toppings, setToppings] = useState<string[]>([]);
    const [hasIce, setHasIce] = useState<boolean>(false);

    const handleSweetnessChange = (event: Event, newSweetness: number | number[]) => {
        setSweetness(newSweetness as number);
    };

    const handleTemperatureChange = (event: Event, newTemperature: number | number[]) => {
        setTemperature(newTemperature as number);
    };

    const handleToppingsChange = (event: SelectChangeEvent<typeof toppings>) => {
        const { target: { value } } = event;
        setToppings(typeof value === 'string' ? value.split(',') : value);
    };

    const handleIceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHasIce(event.target.checked)
    }

    const handleOkClick = () => {
        onOk(sweetness, temperature, toppings, hasIce);
    };

    return (
        <div>
            <DialogTitle>{itemName}</DialogTitle>
                <DialogContent className="orderDialogContent">
                    <div className="sweetnessSlider">
                            <Typography variant="body2">
                                Sweetness
                            </Typography>
                        <Slider value={sweetness} onChange={handleSweetnessChange}/>
                    </div>
                    <div className="TemperatureSlider">
                            <Typography variant="body2">
                                Temperature
                            </Typography>
                        <Slider value={temperature} onChange={handleTemperatureChange}/>
                    </div>
                    <MultipleSelectCheckmarks toppings={toppings} onToppingsChange={handleToppingsChange}/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={hasIce} onChange={handleIceChange}/>} label="Ice" />
                    </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={handleOkClick}>Ok</Button>
            </DialogActions>
        </div>
    )
}