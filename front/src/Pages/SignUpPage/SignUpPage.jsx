import { useState } from "react";
import axios from "axios";
import SignUpPageStyle from './signUpPageStyle';

const SignUpPage = () => {
  const [data, setData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Password: '',
    gender: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'gender') {
      setData({
        ...data,
        gender: value,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const saveData = async (e) => {
    e.preventDefault();

    if (isChecked) {
      console.log(data);

      try {
        const savedData = await axios.post("http://localhost:5004/register", data);
        console.log("Data saved successfully:", savedData.data);
      } catch (error) {
        console.error("Error saving data:", error.message);

        if (error.response) {
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
    } else {
      alert("Checkbox is not checked. Data not submitted.");
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
              <label>
                Gender:
                <select value={data.gender} name="gender" onChange={handleInput}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                I agree to the terms
              </label>
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
