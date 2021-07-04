import { useState } from "react";
import { Link } from "react-router-dom";

import './Menu.scss';

// Component imports

function Menu() {
  const [menuStatus, setMenuStatus] = useState(false);

  // toggle menu active class on click
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div className="burger-menu">
      <div onClick={toggleMenu} className={menuStatus ? 'menu active' : 'menu'}>
        <div id="bar-1" className="bar"></div>
        <div id="bar-2" className="bar"></div>
        <div id="bar-3" className="bar"></div>
      </div>
      <ul className={menuStatus ? "nav active" : 'nav'} id="nav">
        <li>
            <Link to="/">Landing</Link>
        </li>
        <li>
            <Link to="/pricing">Pricing</Link>
        </li>
        <li>
            <Link to="/payment">Payment</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
