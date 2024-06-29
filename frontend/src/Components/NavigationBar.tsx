import './NavigationBar.css';
import imgLogo from "../data/images/logo.svg";

const NavigationBar = () => {
  return <>
    <header className="header">

      <a href="/">
        <img 
          src={imgLogo} 
          alt="Bobuzz logo" 
          className="logo"
        />
      </a>
      
      <nav className="navBar">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/menu">Menu</a>
        <a href="order/">Order</a>
      </nav>
    </header>
  </>
}

export default NavigationBar