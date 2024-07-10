import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slider from "./Slider";
import MultipleSelectCheckmarks from "./ToppingsSelect" ;
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from '@mui/material/Typography';

interface OrderDialogProps {
    itemName: string;
}

export default function OrderDialog({itemName}: OrderDialogProps) {

    return (

        <div>
            <DialogTitle>{itemName}</DialogTitle>
                <DialogContent className="orderDialogContent">
                    <div className="sweetnessSlider">
                            <Typography variant="body2">
                                Sweetness
                            </Typography>
                        <Slider/>
                    </div>
                    <div className="TemperatureSlider">
                            <Typography variant="body2">
                                Temperature
                            </Typography>
                        <Slider/>
                    </div>
                    <MultipleSelectCheckmarks/>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Ice" />
                    </FormGroup>
            </DialogContent>
        </div>
    )
}