import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-inner">
          <div className="logo">Elementum</div>
          
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Studio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ`s</a></li>
          </ul>
          
          <div className="menu-btn">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
