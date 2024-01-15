import { useState } from "react";
import SignUpPageStyle from './signUpPageStyle';

const SignUpPage = () => {
  const [data, setData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Password: '',
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <SignUpPageStyle>
        <div className="container">
          <div className="signUpForm">
            <form onSubmit={saveData}>
              <input
                type="text"
                className="inputField"
                value={data.Fname}
                name='Fname'
                onChange={handleInput}
                placeholder="First Name"
              />
              <br />
              <input
                type="text"
                className="inputField"
                value={data.Lname}
                name='Lname'
                onChange={handleInput}
                placeholder="Last Name"
              />
              <br />
              <input
                type="text"
                className="inputField"
                value={data.Email}
                name='Email'
                onChange={handleInput}
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                className="inputField"
                value={data.Password}
                name='Password'
                onChange={handleInput}
                placeholder="Password"
              />
              <br />
              <button type="submit" className="inputField btn">SIGNUP</button>
            </form>
          </div>
        </div>
      </SignUpPageStyle>
    </>
  );
};

export default SignUpPage;
