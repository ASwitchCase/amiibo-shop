class Cart{
    constructor(){
        this.cart =[];
    }
    
    addToCart = (item) =>{
        this.cart.push(item);
    }

    removeFromCart = (item) =>{
        this.cart = this.cart.filter((i) => {return i.name !== item});
    }

    getCartLen = () =>{
        return this.cart.length;
    }

    getTotalPrice = () =>{
        let total = 0;

        for(let x in this.cart){
            total = total + parseFloat(this.cart[x].price);
        }

        return total;
    }

    isInCart = (name) =>{
        for(let i in this.cart){
            if(this.cart[i].name === name){
                return true;
            }
        }
        return false;
    }
}
export default Cart;

/*
let mycart = new Cart();
mycart.addToCart({'name':"Bill",'price':"2.99"});
mycart.addToCart({'name':"Bill",'price':"1.99"});
mycart.addToCart({'name':"Bill",'price':"4.99"});

console.log(mycart.isInCart('Bil'));
*/