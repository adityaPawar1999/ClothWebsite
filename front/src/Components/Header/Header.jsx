import { NavLink } from "react-router-dom";
import HeaderStyle from "./HeaderStyle";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import AuthLink from "../AuthLink/AuthLink";
import Advertise from "../Advertise/Advertise";

const Header = () => {
  const [valid, setValid] = useState(false);

  const onOff = () => {
    setValid(valid !== true);
  };
  return (
    <>
      <HeaderStyle>
        <div className='container'>
          <div className="navbar">
            <div className="logo">
              logo
            </div>
            <div className="navbarList">
              <div className="desktopNavbar">
                <NavLink className='navLink' to='/'>HOME</NavLink>
                <NavLink className='navLink' to='/shop'>ALL CATEGORIES</NavLink>
                <AuthLink />
              </div>
              <div className="mobileNavbar">
                {
                  (valid === true) ? (<>
                    <MenuIcon onClick={onOff} className="menuIcon" sx={{ color: 'white' }} />
                  </>) : (<>
                    <CancelIcon onClick={onOff} className="menuIcon" sx={{ color: 'white' }} />
                    <div className="mobileNavLinks">
                      <NavLink className='navLink' onClick={onOff} to='/'>HOME</NavLink>
                      <NavLink className='navLink' onClick={onOff} to='/shop'>ALL CATEGORIES</NavLink>
                      <AuthLink />
                    </div>
                  </>)
                }
              </div>
            </div>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
