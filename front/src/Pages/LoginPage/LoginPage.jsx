import { useState } from "react";
import LoginPageStyle from "./LoginPageStyle";
import axios from 'axios';

const LoginPage = () => {
  const [data, setData] = useState({
    Email: '',
    Password: '',
  });
  const [valid, setValid] = useState(false);
  const [userName, setUserName] = useState('');


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5004/login", data);
      console.log('Data transferred successfully ', response.data);
      console.log(data)
      setValid(true);
      setUserName(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginPageStyle>
        <div className="container">

          {valid ? <p>Welcome, {userName}</p> : <p>Login First</p>}

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
