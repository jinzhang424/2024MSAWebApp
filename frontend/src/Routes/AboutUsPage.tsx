import NavigationBar from "../components/NavigationBar";
import ContactsSection from "../components/ContactsSection"
import "./AboutUsPage.css";

import bobaBarista from "../data/aboutUsImages/bobaBarista.jpg"
import bunchOfBoba from "../data/aboutUsImages/bunchOfBoba.jpg"
import bobaIngredients from "../data/aboutUsImages/bobaIngredients.jpg"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let aboutUsText1 : string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi impedit quo deleniti. Iste, veritatis? Provident dolor dolore hic natus ab sapiente praesentium, ut unde asperiores illum voluptas facilis consequatur porro."
let aboutUsText2 : string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi impedit quo deleniti. Iste, veritatis? Provident dolor dolore hic natus ab sapiente praesentium, ut unde asperiores illum voluptas facilis consequatur porro."
let aboutUsText3 : string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi impedit quo deleniti. Iste, veritatis? Provident dolor dolore hic natus ab sapiente praesentium, ut unde asperiores illum voluptas facilis consequatur porro."

export default function AboutUsPage() {

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
      
    theme.typography.body1 = {
        '@media (max-width:450px)': {
          fontSize: '0.8rem',
        },
    
        '@media (min-width:1000px)': {
          fontSize: '1.3rem',
        },
    }

    return <>
        <div className="aboutUsLayout">

            <div className="aboutUsSection1">
                <NavigationBar />
            </div>

            <div className="aboutUsSection2">

                <div className="imgOnLeftAboutUsContainer aboutUs1Container">
                    <div className="imgOnLeftAboutUsTextContainer aboutUs1TextContainer">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3" className="imgOnLeftAboutUsTitle aboutUs1Title">
                                Lorem Ipsum
                            </Typography>
                            <Typography variant="body1" className="imgOnLeftAboutUsTextContainer aboutUs1TextContainter">
                                {aboutUsText1}
                            </Typography>
                        </ThemeProvider>
                    </div>

                    <img 
                        src={bunchOfBoba} 
                        alt="bunch of boba" 
                        className="imgOnLeftAboutUsImg aboutUs1Img" 
                    />
                </div>

                <div className="aboutUs2Container">
                    <div className="aboutUs2TextContainer">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3" className="aboutUs2Title">
                                Lorem Ipsum
                            </Typography>
                            <Typography variant="body1" className="aboutUsBody2">
                                {aboutUsText2}
                            </Typography>
                        </ThemeProvider>
                    </div>

                    <img 
                        src={bobaBarista} 
                        alt="boba barista image" 
                        className="aboutUs2Img" 
                    />
                </div>

                <div className="imgOnLeftAboutUsContainer aboutUs3Container">
                    <div className="imgOnLeftAboutUsTextContainer aboutUs3TextContainer">
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3" className="imgOnLeftAboutUsTitle aboutUs3Title">
                                Lorem Ipsum
                            </Typography>
                            <Typography variant="body1" className="imgOnLeftAboutUsTextContainer aboutUs3TextContainter">
                                {aboutUsText3}
                            </Typography>
                        </ThemeProvider>
                    </div>

                    <img 
                        src={bobaIngredients} 
                        alt="boba ingredients" 
                        className="imgOnLeftAboutUsImg aboutUs3Img" 
                    />
                </div>
            </div>

            <div className="aboutUsContactsSection">
                <ContactsSection/>
            </div>
        </div>
    </>
}