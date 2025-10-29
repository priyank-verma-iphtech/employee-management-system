import React from 'react'
import { BrowserRouter, Router,} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Help from './pages/Help'

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
        <Route path = "/"  element = {<Login/>}></Route>
          <Route path = "/login"  element = {<Login/>}></Route>
          <Route path = "/signup"  element = {<SignUp/>}></Route>
          <Route path = "/dashboard"  element = {<Dashboard/>}></Route>
          <Route path = "/profile"  element = {<Profile/>}></Route>
          <Route path = "/home"  element = {<Home/>}></Route>
          <Route path = "/about"  element = {<About/>}></Route>
          <Route path = "/contactUs"  element = {<ContactUs/>}></Route>
          <Route path = "/help"  element = {<Help/>}></Route>

        </Routes>
      
    </BrowserRouter>
  )
}

export default App;