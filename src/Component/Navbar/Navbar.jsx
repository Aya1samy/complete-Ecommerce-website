import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Asserts/logo.png'
import cart_icon from '../Asserts/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const[menu , setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li  onClick={() => {setMenu("shop")}}><Link to= '/' style={{textDecoration:'none'}}>Shop</Link>   {menu ==="shop"? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("Man")}}><Link to= '/men' style={{textDecoration:'none'}}>Men</Link>   {menu ==="Man"? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("Woman")}}><Link to= '/women' style={{textDecoration:'none'}}>Women</Link>  {menu ==="Woman"? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("Kid")}}><Link to= '/kids' style={{textDecoration:'none'}}>Kids</Link>   {menu ==="Kid"? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>

      </div>
    </div>
  )
}

export default Navbar