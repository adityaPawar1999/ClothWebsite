import { NavLink } from "react-router-dom";
import { useState } from "react";

const AuthLink = () => {
    const [userVerified, setuserVerified] = useState(false);
    return (<>
        {
            (userVerified === true) ? (
                <>
                    <NavLink className='navLink' to='/cart'>WELCOME</NavLink>
                    <NavLink className='navLink' to='/addProduct'>ADD NEW</NavLink>
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