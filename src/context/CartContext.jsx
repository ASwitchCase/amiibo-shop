import React,{Component, createContext} from "react";
import Cart from '../Cart.js';

export const CartContext = createContext();

class CartContextProvider extends Component{
    state = {
        myCart: new Cart(),
    }
    
    addToCart = (item) =>{
        let newCart = this.state.myCart;
        newCart.addToCart(item);

        this.setState({myCart:newCart});
    }

    removeFromCart = (name) =>{
        let newCart = this.state.myCart;
        newCart.removeFromCart(name);

        this.setState({myCart:newCart});
    }

    render() {
        return(
            <CartContext.Provider value={{...this.state, sayHello: this.sayHello,addToCart:this.addToCart,removeFromCart:this.removeFromCart}}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartContextProvider;