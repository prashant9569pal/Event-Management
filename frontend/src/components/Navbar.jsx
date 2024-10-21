import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import HeroSection from "./HeroSection";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">Event's Management</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to="hero" spy={true} smooth={true} duration={500}>
              HOME
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500}>
              SERVICES OFFERED
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              ABOUT
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              CONTACT
            </Link>
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Navbar;
