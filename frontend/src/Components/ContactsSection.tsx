import "./ContactsSection.css"
import imgLogo from "../data/images/logo.svg";

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Typography from '@mui/material/Typography';

export default function ContactsSection() {

    const theme = createTheme();

    theme.typography.body2 = {
        
        fontWeight: '500',

        '@media (max-width: 1000px)': {
            fontSize: '1rem',
        },

        '@media (min-width:1000px)': {
          fontSize: '1.1rem',
        },

        '@media (max-width:500px)': {
          fontSize: '0.9rem',
        },
    }

    return <>
        
        <div className="contactsContainer">
            
            <a href="/" className="logoLink2">
                <img 
                src={imgLogo} 
                alt="Bobuzz logo" 
                className="logo2"
                />
            </a>

            <div className="pageLinksContainer">
                <nav>
                    <a href="/" className="pageLink">Home</a>
                </nav>
                <nav>
                    <a href="order/" className="pageLink">Order</a>
                </nav>
                <nav>
                    <a href="/about-us" className="pageLink">About Us</a>
                </nav>
            </div>

            <nav className="socialMediaContainer" >
                <a href="/tbd" className="socialMedia">
                    <XIcon style={{ color: 'white' }} sx={{ fontSize: 40}}/>
                </a>
                <a href="/tbd" className="socialMedia">
                    <InstagramIcon style={{ color: 'white' }} sx={{ fontSize: 40}}/>
                </a>
                <a href="/tbd" className="socialMedia">
                    <FacebookIcon style={{ color: 'white' }} sx={{ fontSize: 40}}/>
                </a>
            </nav>

            <div className="contactInfoContainer">
                <ThemeProvider theme={theme}>
                    <Typography variant="body2">
                        Phone: XXX XXX XXX
                    </Typography>
                    <Typography variant="body2">
                        Email: bobuzz123@gmail.com
                    </Typography>
                </ThemeProvider>
            </div>
        </div>
    </>
}