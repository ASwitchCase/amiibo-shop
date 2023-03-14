import React from 'react'
import Catagory from '../components/Catagory'
import Navbar from '../components/Navbar'

import fflogo from '../images/finalfantasy.png'
import metroidlogo from '../images/metroid.png'
import lozlogo from '../images/loz.png'
import Product from '../components/Product'

import itemsList from '../ItemsData'
import { CartContext } from '../context/CartContext'


const Start = () => {
  return (
    <React.Fragment>
        <div className='page-container'>
            
              <Navbar></Navbar>
            
            <div className='categories-container'>
                <h1>Categories</h1>
                <hr></hr>
                <Catagory imgrc={fflogo} name='Final Fantasy'></Catagory>
                <Catagory imgrc={lozlogo} name='The legend of Zelda'></Catagory>
                <Catagory imgrc={metroidlogo} name='Metroid'></Catagory>
                
            </div>

            <div className='products-container'>
                <h1>Featured Products</h1>
                <hr></hr>
                <CartContext.Consumer>{context =>{
                  {
                    return itemsList.map(item => 
                      <Product isInCart={context.myCart.isInCart(item.name)} item={item}></Product>
                    )
                  }
                }}
                </CartContext.Consumer>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default Start
