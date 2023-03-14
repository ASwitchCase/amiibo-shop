import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import { CartContext } from '../context/CartContext';

const SearchPage = () => {
  const location = useLocation();

  return (
    <React.Fragment>
        <div className='page-container'>
            <Navbar></Navbar>
            <div className='search-container'>
                <h1>My Cart</h1>
                <hr></hr>
                <CartContext>{context =>{
                    return location.state.data.map(item =><Product isInCart={context.myCart.isInCart(item.name)} item={item}></Product>)
                }}</CartContext>
                
            </div>
        </div>
    </React.Fragment>
  )
}

export default SearchPage
