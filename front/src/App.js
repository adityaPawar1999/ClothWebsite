import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components"; 


import Header from "./Components/Header/Header";
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage';
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Cart from './Pages/Cart/Cart'
import AddProduct from './Pages/AddProdouct/AddProduct';
import SinglePage from './Pages/SinglePage.jsx/SinglePage';

function App() {
   const theme = {
    color: {
      bgText: '#25D872',
      bgSubText:"red"
    }
  };
  return (
    <>
    <ThemeProvider theme={theme}>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/Shop' element={<ShopPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/SignUp' element={<SignUpPage/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/singlePage/:id' element={<SinglePage/>}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>      
    </Routes>
    </ThemeProvider>
    </>
  );
}
export default App;
