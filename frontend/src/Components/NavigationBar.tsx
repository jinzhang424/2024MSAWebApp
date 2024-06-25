export default function NavigationBar() {
    return <>
    <nav className="navBar">
      <a href="/" className="site-title">Bobuzz</a>
      <ul>
          <li><a href="/order">Order</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About Us</a></li>
      </ul>
    </nav>
  </>
}