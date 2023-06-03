import React from 'react'
import {Route, Routes} from 'react-router-dom';
import ProductDetailsPage from '../Components/ProductDetailsPage/ProductDetailsPage';
import { SignUp } from '../Components/signup/SignUp';
import Login from '../Components/Login/Login';


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductDetailsPage/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}
