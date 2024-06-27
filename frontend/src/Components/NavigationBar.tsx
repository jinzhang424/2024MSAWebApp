import './NavigationBar.css';

const NavigationBar = () => {
  return <>
    <header className="header">

      <a href="/" className="logo">Bobuzz</a>
      
      <nav className="navBar">
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/menu">Menu</a>
        <a href="order/">Order</a>
      </nav>
    </header>
  </>
}

export default NavigationBar