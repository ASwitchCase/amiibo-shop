import React, { useState } from 'react'
import addtocart from '../images/addtocart.png'
import addtofav from '../images/addtofav.png'
import addtofavselected from '../images/addtofavselected.png'
import addtocartselected from '../images/addtocartselected.png'
import { CartContext } from '../context/CartContext'

const Product = (props) => {
  
  const[isInCart,setIsInCart] = useState(props.isInCart);
  const[isFav,setIsFav] = useState(false);

  const toggleCart = () =>{
    isInCart ? setIsInCart(false) : setIsInCart(true)
  }

  const toggleFav = () =>{
    isFav ? setIsFav(false) : setIsFav(true)
  }

  return (
    <React.Fragment>
        <div className='product-container'>
            <div className='product-tools'>
              <CartContext.Consumer>{(context) =>{
                return <a 
                          
                          onClick={!isInCart ?
                            () => context.addToCart(
                              {
                                name:props.item.name,
                                price:props.item.price,
                                img:props.item.img
                              
                              }):
                            () => context.removeFromCart(props.item.name)
                
                        }>
                          
                        <img onClick={toggleCart} src={isInCart ? addtocartselected : addtocart}></img>
                      </a>
              }}</CartContext.Consumer>
              
              <img onClick={toggleFav} src={isFav ? addtofavselected : addtofav}></img>
            </div>
            
            <img src={props.item.img}></img>
            
            <h2>{props.item.name}</h2>
            <h3>${props.item.price}</h3>
        </div>
    </React.Fragment>
  )
}

export default Product
