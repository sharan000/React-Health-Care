import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <nav>
        <figure>
          <div class="logo">HC</div>
          <div class="logo-name">Health Care</div>
        </figure>
        <ul class="nav-menu">
          <li class="nav-menu-list">
            <a href="#services">Services</a>
          </li>
          <li class="nav-menu-list">
            <a href="#about">About</a>
          </li>
          <li class="nav-menu-list">
            <a href="#apps">Apps</a>
          </li>
          <li class="nav-menu-list">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li class="nav-menu-list">
            <a href="#articles">Articles</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;