import React, { useState } from 'react'
import amibo_logo from '../images/amiibo_logo.png'
import cart_icon from '../images/cart.png'
import search_icon from '../images/search.png'
import nintendo_logo from '../images/nintendo.png'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import itemsList from '../ItemsData'

const Navbar = () => {

  const[searchData,setSearchData] = useState('');

  const search = () =>{
    return itemsList.filter((item) =>{return item.name.toLowerCase().includes(searchData.toLowerCase())})
  }
  return (
    <React.Fragment>
        <div className='nav-bar-container'>
            <div className='logo-container'>
              <Link to='/'>
                <img src = {nintendo_logo}></img>
                <img src = {amibo_logo}></img>
              </Link>
            </div>

            
            <div className='tools-container'>
                <Link to='/Search' state={{data:search()}}>
                  <img style={{display:"inline-block",width:'2vw', height:'4vh',margin:"1% 1%"}} src = {search_icon}></img>
                </Link>
                <input 
                  onChange={(e) => setSearchData(e.target.value)}
                  style={{display:"inline-block", 
                          height:"52%",width:"70%",
                          fontSize:"26px",
                          verticalAlign:'top',
                          margin:"1% 2%",
                          border: '2px solid white',
                          borderRadius:'5px',
                          backgroundColor:'rgb(244, 186, 186)',
                          color:'white'
                          }}>
                </input>
                <Link to="/MyCart" state={{some:'value'}}>
                  <img style={{display:"inline-block",width:'2vw',height:'4vh',margin:"1% 1%",zIndex:'1'}} src = {cart_icon}></img>
                </Link>
                
                <CartContext.Consumer>
                  {(context) =>{
                    return <span className='cart-count'>{context.myCart.getCartLen()}</span>
                  }}
                </CartContext.Consumer>
                
                
                
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default Navbar
