import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';

import Header from "./Components/Header/Header";
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage';
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/Shop' element={<ShopPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/SignUp' element={<SignUpPage/>}></Route>
      <Route path='*' element={<ErrorPage/>}></Route>      
    </Routes>
    </>
  );
}
export default App;