import { useState } from 'react';
import AddProductStyle from './addProductStyle';
import axios from 'axios';

const AddProduct = () => {
  const [data, setData] = useState({
    name: '',
    prize: '',
    company: '',
    categories: '',
    image: '',
    Description: ''
  })
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      console.log(data)
      const result = await axios.post("http://localhost:5004/addProduct", data);
      console.log(result.data)
    } catch (error) {
      console.log("error occured", error);
    }
  }
  return (
    <>
      <AddProductStyle>
        <div className='container'>
          <div className="row g-4">
            <div className="left col-lg-6">
              <img
                className='image'
                src='https://images.unsplash.com/photo-1587725943749-3d475c15c983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D'
                alt='img'
              />
            </div>
            <div className="right col-lg-6">
              <form className='form' onSubmit={submitForm}>
                <div className="box row g-0">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="inputField"
                      value={data.name}
                      name='name'
                      onChange={handleInput}
                      placeholder="name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="inputField"
                      value={data.company}
                      name='company'
                      onChange={handleInput}
                      placeholder="company"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="inputField"
                      value={data.prize}
                      name='prize'
                      onChange={handleInput}
                      placeholder="prize"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="inputField"
                      value={data.Description}
                      name='Description'
                      onChange={handleInput}
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div className="box row g-0">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="inputField"
                      value={data.categories}
                      name='categories'
                      onChange={handleInput}
                      placeholder="categories"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="inputField"
                      value={data.image}
                      name='image'
                      onChange={handleInput}
                      placeholder="Select image"
                    />
                  </div>
                </div>
                <div className="box row g-0">
                  <div className="col-lg-6">
                    <button
                      type='submit'
                      className='btn'
                    >submit</button>
                  </div>
                  <div className="col-lg-6">
                    <button
                      type='cancel'
                      className='btn'
                    >cancel</button>
                  </div>
                </div>
              </form></div>
          </div>
        </div>
      </AddProductStyle>
    </>
  );
};

export default AddProduct;
