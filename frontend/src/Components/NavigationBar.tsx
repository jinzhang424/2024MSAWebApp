import { Link } from 'react-router-dom';

export default function NavigationBar() {
    return <>
    <nav className="navBar">
      <a href="/" className="siteTitle">Bobuzz</a>
      <ul className="links">
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
      </ul>
    </nav>
  </>
}