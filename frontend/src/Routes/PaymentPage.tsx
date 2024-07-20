import NavigationBar from "../components/NavigationBar";
import ContactsSection from "../components/ContactsSection";
import "./PaymentPage.css";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import { MilkTeaOrderInfo } from '../components/MenuSelection';
import { MilkShakeOrderInfo } from '../components/MenuSelection';
import Button from '@mui/material/Button'
import { postOrder } from '../Services/OrderService';

export default function PaymentPage() {

    const location = useLocation();
    const { milkTeaOrders, milkShakeOrders } = location.state || { milkTeaOrders: [], milkShakeOrders: [] };
    const theme = createTheme();

    const handleConfirm = async () => {
        const orderData = {
            milkTeaOrders,
            milkShakeOrders
        };

        try {
            const response = await postOrder(orderData);
            console.log('Order successfully posted:', response);
        } catch (error) {
            console.error('Eorror posting order:', error);
        }
    }

    theme.typography.h4 = {
        fontWeight: '700',
        fontSize: '1.8rem',
        color: 'rgb(231, 181, 106)'
    }

    theme.typography.h6 = {
        fontWeight: '600',
        fontSize: '1.2rem',
        color: 'rgb(231, 181, 106)'
    }

    theme.typography.body1 = {
        fontWeight: '600',
        fontSize: '17px'
    }

    theme.typography.body2 = {
        fontWeight: '400',
        fontSize: '16px'
    }

    return (
        <div className="paymentPageContainer">
            
            <div className="paymentPageSection1">
                <NavigationBar/>
            </div>
            
            <div className="orderInfoContainer">

                <div className="paymentHeader">
                    <ThemeProvider theme={theme}>
                        <Typography variant="h4">
                            Payment
                        </Typography>
                    </ThemeProvider>
                </div>

                <div className="infoContainer">
                    <div className="orderItemsContainer">
                        <div className="info orderItemsSection">
                            <ThemeProvider theme={theme}>
                                <Typography variant="h6" className="ordersHeader">
                                    Orders
                                </Typography>

                                <div className="orders">
                                    <ul>
                                        {milkTeaOrders.map((order : MilkTeaOrderInfo, index : number) => (
                                            <li key={index} className="orderItems">
                                                <ThemeProvider theme={theme}>
                                                    <Typography variant="body1">
                                                        {order.itemName}:  ${order.itemPrice}
                                                    </Typography>
                                                </ThemeProvider>
                                                <ThemeProvider theme={theme}>
                                                    <Typography variant="body2">
                                                        Sweetness: {order.sweetness} | Temperature: {order.temperature} | Toppings: {order.toppings.join(', ')} | Ice: {order.hasIce ? 'Yes' : 'No'}
                                                    </Typography>
                                                </ThemeProvider>
                                            </li>
                                        ))}
                                    </ul>

                                    <ul>
                                        {milkShakeOrders.map((order : MilkShakeOrderInfo, index : number) => (
                                            <li key={index} className="orderItems">
                                                <ThemeProvider theme={theme}>
                                                    <Typography variant="body1">
                                                        {order.itemName}:  ${order.itemPrice}
                                                    </Typography>
                                                </ThemeProvider>
                                                <ThemeProvider theme={theme}>
                                                    <Typography variant="body2">
                                                        Toppings: {order.toppings.join(', ')}
                                                    </Typography>
                                                </ThemeProvider>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ThemeProvider>
                        </div>
                    </div>

                    <div className="customerInfoContainer">
                        <div className="billingAddressContainer">
                            <div className="info billingAddressSection">
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h6">
                                        Delivery Info
                                    </Typography>
                                </ThemeProvider>

                                <div className="address">
                                    <TextField variant="outlined" label="Address" style={{ width: '47%'}}/>
                                    <TextField variant="outlined" label="City / Town" style={{ width: '47%'}}/>
                                </div>
                                <TextField fullWidth variant="outlined" label="Phone"/>
                            </div>
                        </div>

                        <div className="cardInfoContainer">
                            <div className="info cardInfoSection">
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h6">
                                        Card Info
                                    </Typography>
                                </ThemeProvider>
                                <TextField fullWidth variant="outlined" label="Card Number"/>
                                <div className="otherCCDetails">
                                    <TextField variant="outlined" label="Exp Date" style={{ width: '47%'}}/>
                                    <TextField variant="outlined" label="CVV" style={{ width: '47%'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button variant="contained" style={{ backgroundColor: 'rgb(231, 181, 106)' }} onClick={handleConfirm}>
                    Confirm
                </Button>
            </div>
            
            <div className="paymentPageContact">
                <ContactsSection/>
            </div>
        </div>
    )
}