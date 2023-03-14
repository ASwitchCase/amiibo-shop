import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext'
import trash from '../images/trash.png'

const CartPage = () => {
    //const location  = useLocation();
  return (
    <React.Fragment>
        <div className='page-container'>
            <Navbar></Navbar>
            <div className='cart-container'>
                <h1>My Cart</h1>
                <hr></hr>

                <div className='cart-items-container'>
                    <h2>Items</h2>
                    <CartContext.Consumer>{context =>{
                        return context.myCart.cart.map(item => 
                            <div className='cart-item'>
                                <div style={{display:'inline-block',marginLeft:'2%',height:'99%',width:'25%',verticalAlign:'middle'}}>
                                    <img style={{height:'90%'}} src={item.img}></img>
                                </div>
                                
                                <div style={{display:'inline-block',height:'99%',width:'25%'}}>
                                    <h2>{item.name}</h2>
                                </div>

                                <div style={{display:'inline-block',height:'99%',width:'25%'}}>
                                    <h3>${item.price}</h3>
                                </div>

                                <div style={{display:'inline-block',height:'99%',width:'6%'}}>
                                    <img onClick={() => context.removeFromCart(item.name)} style={{width:'99%'}} src= {trash}></img>
                                </div>
                                
                            </div>
                        )   
                    }}
                    </CartContext.Consumer>
                </div>
                
                <div className='recept-container'>
                    <h1>Payment Details:</h1>
                    
                    <div className='card-info'>
                        <div>
                            <h2>Card Number:</h2>
                            <h3>xxx-xxx-xxxx</h3>
                        </div>

                        <div>
                            <h2>Card Holder Name:</h2>
                            <h3>xxxxxxxx</h3>
                        </div>

                        <div >
                            <h2>Expiration Date</h2>
                            <h3>xx/xxxx</h3>
                        </div>

                        <div>
                            <h2>CCV:</h2>
                            <h3>xxx</h3>
                        </div>
                    </div>
                    <button>Procced To Checkout</button>
                    <CartContext.Consumer>{context =>{
                        return <h2 style={{float:'right',marginTop:'30%'}}>Total: ${context.myCart.getTotalPrice()}</h2>
                }}</CartContext.Consumer>

                </div>

            </div>
            
        </div>
    </React.Fragment>
  )
}

export default CartPage
