import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-column1">
        <figure>
          <div className="logo">HC</div>
          <div className="logo-name">Health Care</div>
        </figure>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div className="footer-column">
        <h2>Company</h2>
        <div>About</div>
        <div>Testimonials</div>
        <div>Find a doctor</div>
        <div>Apps</div>
      </div>
      <div className="footer-column">
        <h2>Region</h2>
        <div>Indonesia</div>
        <div>Singapore</div>
        <div>Hongkong</div>
        <div>Canada</div>
      </div>
      <div className="footer-column">
        <h2>Help</h2>
        <div>Help center</div>
        <div>Contact support</div>
        <div>Instructions</div>
        <div>How it works</div>
      </div>
    </footer>
  );
}

export default Footer;
