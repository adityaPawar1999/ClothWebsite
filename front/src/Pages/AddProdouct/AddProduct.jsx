import { useState } from 'react';
import AddProductStyle from './addProductStyle';

const AddProduct = () => {
  const [data ,setData] =useState({
        name:''
    })
    const handleInput = (e) =>{

    }
    return (
    <>
      <AddProductStyle>
        <div className='container'>
            <form className='form'>
              <input
                type="text"
                className="inputField"
                value={data.name}
                name='name'
                onChange={handleInput}
                placeholder="name"
              />
              <br/>
              <input
                type="text"
                className="inputField"
                value={data.prize}
                name='prize'
                onChange={handleInput}
                placeholder="prize"
              />
              <br/>
              <input
                type="text"
                className="inputField"
                value={data.categories}
                name='categories'
                onChange={handleInput}
                placeholder="categories"
              />
              <br/>
              <input
                type="file"
                className="inputField"
                value={data.image}
                name='image'
                onChange={handleInput}
                placeholder="Select image"
              />
              <br/>
            </form>
        </div>
      </AddProductStyle>
    </>
  );
};

export default AddProduct;
