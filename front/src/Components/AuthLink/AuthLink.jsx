import { NavLink } from "react-router-dom";
import { useState  } from "react";

const AuthLink = () =>{
    const [userVerified ,setuserVerified] = useState(true);
    return(<>
    {
        (userVerified === true) ? (
            <>
             <NavLink className='navLink' to='/cart'>WELCOME</NavLink>
            </>
        ) : (
            <>
                <NavLink className='navLink' to='/login'>LOGIN</NavLink>
                <NavLink className='navLink' to='/signup'>SIGNUP</NavLink>
            </>
        )
    }
    </>)
}
export default AuthLink;