export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Bobuzz</h1>
          <nav>
            <ul>
              <li>
                <a href={`/aboutus`}>About Us</a>
              </li>
              <li>
                <a href={`/order`}>Order</a>
              </li>
              <li>
                <a href={'/menu'}>Menu</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }