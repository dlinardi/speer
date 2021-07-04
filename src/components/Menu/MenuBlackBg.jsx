import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import './Menu.scss';

// Component imports

function MenuBlackBg(props) {
  const [menuStatus, setMenuStatus] = useState(false);
  const [hover, setHover] = useState(false);

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
      color: ${props => (props.shouldHover ? `${activeColour}` : "none")};
    }
  `;

  return (
    <>
      <div id="burger-menu" className="burger-menu">
        <div className="menu-hz">
          <div onClick={toggleMenu} className={menuStatus ? 'menu active' : 'menu'}>
            <div id="bar-1" className="bar" style={{backgroundColor: '#fff'}}></div>
            <div id="bar-2" className="bar" style={{backgroundColor: '#fff'}}></div>
            <div id="bar-3" className="bar" style={{backgroundColor: '#fff'}}></div>
          </div>
          <div className="menu-title" style={{color: '#fff'}}>EXP|CON</div>
        </div>
        <ul className={menuStatus ? "nav active" : 'nav'} id="nav">
          <li>
            <StyledLink shouldHover={true} to="/">WHAT IS IT</StyledLink>
          </li>
          <li>
              <StyledLink shouldHover={true} to="/payment">PERKS</StyledLink>
          </li>
          <li>
              <StyledLink shouldHover={true} to="/pricing">PRICING</StyledLink>
          </li>
        </ul>
      </div>
      <div id="menu-bubble" className={menuStatus ? "menu-bubble-black-bg active" : "menu-bubble-black-bg"} onMouseLeave={toggleMenu}></div>
    </>
  );
}

export default MenuBlackBg;
