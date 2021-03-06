import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import './Menu.scss';

// Component imports

function Menu(props) {
  const [menuStatus, setMenuStatus] = useState(false);

  const { activeColour } = props;

  // toggle menu active class on click
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  // Styled link component so hover colour matches bg colour
  // and colour can be set through prop.
  const StyledLink = styled(Link)`
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    transition: all 450ms ease-in;
    &:hover {
      color: ${props => (props.hover ? `${activeColour}` : "none")};
    }
  `;

  return (
    <>
      <div id="burger-menu" className="burger-menu">
        <div className="menu-hz">
          <div onClick={toggleMenu} className={menuStatus ? 'menu active' : 'menu'}>
            <div id="bar-1" className="bar" style={{backgroundColor: menuStatus ? activeColour : '#fff'}}></div>
            <div id="bar-2" className="bar" style={{backgroundColor: menuStatus ? activeColour : '#fff'}}></div>
            <div id="bar-3" className="bar" style={{backgroundColor: menuStatus ? activeColour : '#fff'}}></div>
          </div>
          <div className="menu-title" style={{color: menuStatus ? activeColour : '#fff'}}>EXP|CON</div>
        </div>
        <ul className={menuStatus ? "nav active" : 'nav'} id="nav">
          <li>
            <StyledLink hover={"true"} to="/">WHAT IS IT</StyledLink>
          </li>
          <li>
              <StyledLink hover={"true"} to="/">PERKS</StyledLink>
          </li>
          <li>
              <StyledLink hover={"true"} to="/pricing">PRICING</StyledLink>
          </li>
        </ul>
      </div>
      <div id="menu-bubble" className={menuStatus ? "menu-bubble active" : "menu-bubble"} onMouseLeave={toggleMenu}></div>
    </>
  );
}

export default Menu;
