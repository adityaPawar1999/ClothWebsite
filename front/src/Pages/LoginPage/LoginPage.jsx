import { useState } from "react";
import LoginPageStyle from "./LoginPageStyle";

const LoginPage = () => {
  const [data, setData] = useState({
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
    <LoginPageStyle>
        <div className="container">
          <div className="signUpForm">
            <form onSubmit={saveData}>
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
              <button type="submit" className="inputField btn">LOGIN</button>
            </form>
          </div>
        </div>
        </LoginPageStyle>
    </>
  );
};

export default LoginPage;
