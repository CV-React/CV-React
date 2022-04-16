import "./Header.scss";
import { logo } from "assets/images";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleOpenMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header id="home">
      <nav id="theMenu" className={toggleMenu ? "menu menu__open" : "menu"}>
        <div id="menu-options" className="menu__wrap">
          <div className="logo__flat">
            <img alt="personal-logo" className="img__responsive" src={logo} />
          </div>
          <br />
          <a href="#home">
            <i className="title__icon fa fa-user"></i>Home
          </a>
          <a href="#about">
            <i className="title__icon fa fa-dashboard"></i>About
          </a>
          <a href="#education">
            <i className="title__icon fa fa-graduation-cap"></i>Education
          </a>
          <a href="#skills">
            <i className="title__icon fa fa-sliders"></i>Skills
          </a>
          <a href="#experience">
            <i className="title__icon fa fa-suitcase"></i>Experience
          </a>
          <a href="#portfolios">
            <i className="title__icon fa fa-archive"></i>Portfolios
          </a>
          <a href="#interest">
            <i className="title__icon fa fa-heart"></i>Interest
          </a>
          <a href="#testimonials">
            <i className="title__icon fa fa-users"></i>Testimonials
          </a>
          <a href="#pricing">
            <i className="title__icon fa-regular fa-money-bill-1"></i>Pricing
          </a>
          <a href="#blog">
            <i className="title__icon fa fa-pencil-square"></i>Blog
          </a>
          <a href="#contact">
            <i className="title__icon fa fa-envelope"></i>Contact
          </a>
        </div>

        <div id="menuToggle" onClick={handleOpenMenu} className="">
          <div className="toggle-normal">
            <i
              className={
                toggleMenu
                  ? "material-icons top-bar top__transform"
                  : "material-icons top-bar"
              }
            >
              remove
            </i>
            <i
              className={
                toggleMenu
                  ? "material-icons middle-bar middle__transform"
                  : "material-icons middle-bar"
              }
            >
              remove
            </i>
            <i
              className={
                toggleMenu
                  ? "material-icons bottom-bar bottom__transform"
                  : "material-icons bottom-bar"
              }
            >
              remove
            </i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
