import Scrollspy from "react-scrollspy";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="#hero">
          Umar<span className="dot">.</span>
        </a>

        <Scrollspy
          items={[
            "hero",
            "about",
            "experience",
            "skills",
            "services",
            "portfolio",
            "certifications",
            "contact",
          ]}
          currentClassName="active"
          componentTag="ul"
          offset={-120}
        >
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">Summary</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </Scrollspy>
      </div>
    </nav>
  );
};

export default Navbar;
