import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <nav>
        <figure>
          <div className="logo">HC</div>
          <div className="logo-name">Health Care</div>
        </figure>
        <ul className="nav-menu">
          <li className="nav-menu-list">
            <a href="#services">Services</a>
          </li>
          <li className="nav-menu-list">
            <a href="#about">About</a>
          </li>
          <li className="nav-menu-list">
            <a href="#apps">Apps</a>
          </li>
          <li className="nav-menu-list">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-menu-list">
            <a href="#articles">Articles</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;