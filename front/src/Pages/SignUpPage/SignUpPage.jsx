import { useState } from "react";
import axios from "axios";
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
const saveData = async (e) => {
    e.preventDefault();
    try {
        const savedData = await axios.post("http://localhost:5004/register", data);
        console.log("Data saved successfully:", savedData.data);
    } catch (error) {
        console.error("Error saving data:", error.message);

        if (error.response) {
            // The request was made and the server responded with a status code
            // other than 2xx (success).
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
        } else if (error.request) {
            // The request was made but no response was received.
            console.error("No response received from the server");
        } else {
            // Something happened in setting up the request that triggered an Error.
            console.error("Error setting up the request:", error.message);
        }
    }
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
              <br/>
              <input
                type="text"
                className="inputField"
                value={data.Lname}
                name='Lname'
                onChange={handleInput}
                placeholder="Last Name"
              />
              <br/>
              <input
                type="text"
                className="inputField"
                value={data.Email}
                name='Email'
                onChange={handleInput}
                placeholder="Email"
              />
              <br/>
              <input
                type="text"
                className="inputField"
                value={data.Password}
                name='Password'
                onChange={handleInput}
                placeholder="Password"
              />
              <br/>
              <button type="submit" className="inputField btn">SIGNUP</button>
            </form>
          </div>
        </div>
      </SignUpPageStyle>
    </>
  );
};

export default SignUpPage;
