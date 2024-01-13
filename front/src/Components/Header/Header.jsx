import { NavLink } from "react-router-dom";
import HeaderStyle from "./HeaderStyle";
import { useState ,useEffect } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Header = () => {
  const [valid, setValid] = useState(false);

  const onOff= () => {
    setValid(!true);
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
                  <NavLink className='navLink' to='/'>HOME</NavLink>
                  <NavLink className='navLink' to='/shop'>ALL CATEGORIES</NavLink>  
            </div>
            <div className="mobileNavbar">
              {
              (valid === true) ? (<>
              <MenuIcon onClick={onOff} className="menuIcon" sx={{color:'white'}} />
              </>) : (<>
                <CancelIcon onClick={onOff} className="menuIcon" sx={{color:'white'}}/>
              </>)
            }
            </div>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
