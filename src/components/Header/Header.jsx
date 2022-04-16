import "./Header.scss";
import { logo } from "assets/images";
import { useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { mockData } from "utils/constants/mockData";

const Header = () => {
  const { menuArr } = mockData;

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleOpenMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header id="home">
      <nav id="theMenu" className={toggleMenu ? "menu menu__open" : "menu"}>
        <div className="menu__wrap">
          <div className="logo__flat">
            <img alt="personal-logo" className="img__responsive" src={logo} />
          </div>
          <div className="menu__inner">
            {menuArr &&
              !!menuArr.length &&
              menuArr.map((item, index) => (
                <ScrollIntoView
                  selector={item.href}
                  onClick={handleOpenMenu}
                  key={index}
                >
                  <span>
                    {item.icon}
                    {item.name}
                  </span>
                </ScrollIntoView>
              ))}
          </div>
        </div>

        <div id="menuToggle" onClick={handleOpenMenu}>
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
