import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartQty, clearCart, decreaseCartQty, removeFromCart } from "../features/cartSlice";


export default function Cart() {
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();


    const handleRemoveFromCart= (cartItem)=>{
        dispatch(removeFromCart(cartItem))
    };

    const handleDecreasedQtyFromCart = (cartItem) =>{
        dispatch(decreaseCartQty(cartItem))
    };

    const handleIncreasedQtyFromCart = (cartItem) =>{
        dispatch(addCartQty(cartItem))
    }

    const handleClearCart = (cartItem) =>{
        dispatch(clearCart(cartItem))
    }

  return (
    <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length===0 ? (
            <div className="cart-empty container-fluid">
                    <p>Your cart is empty.</p>
                    <div className="start-shopping">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Start Shopping</span>
                    </Link>
                    </div>
            </div>

           


        ) : (
            <div className="container">
                <div className="titles row">
                    <h3 className="col-6">Product Name</h3>
                    <h3 className="col-2">Price</h3>
                    <h3 className="col-2">Quantity</h3>
                    <h3 className="col-2 title-total">Total</h3>
                </div>
                <div className="container">
                    {cart.cartItems?.map(cartItem=>(
                        <div className="cart-item row p-5" key={cartItem.id}>
                            <div className="col-6 d-flex">
                                <div className="cart-product">
                                    <img style={{width:'100px'}} src={`/products/helmets/${cartItem.picture}`} alt={cartItem.name} />
                                    <div>
                                        <h6>{cartItem.name}</h6>
                                        <button className="btnRemoveItem" onClick={()=>handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                    <div className="cart-product-price">
                                        0
                                    </div>
                            </div>
                            <div className="col-2"> 
                                <div className="btnQty-container">
                                    <button className="btnQty" onClick={()=>handleDecreasedQtyFromCart(cartItem)}> - </button>
                                    <div className="qtyCount">
                                        {cartItem.cartQuantity} 
                                    </div>
                                    <button className="btnQty" onClick={()=>handleIncreasedQtyFromCart(cartItem)}> + </button>
                                </div>                                
                            </div>
                           <div className="col-2">
                                <div className="cart-product-total-price">
                                    ${cartItem.cartQuantity}
                                </div>
                           </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary row mt-5">
                    <div className="col-9">
                        <button className="clear-cart" onClick={()=>handleClearCart(cart)}>Clear Cart</button>
                    </div>                    
                    <div className="cart-checkout col-3">
                        <div className="subtotal">
                            <span className="fs-4">Subtotal</span>
                            <span className="fs-3 pe-5 cartTotalAmount">$90000.0{cart.cartTotalAmount}</span>
                        </div>
                        <button className="btnCheckout btn btn-lg btn-primary">Check out</button>
                        <div className="continue-shopping mt-3">
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                                <span className="continueShoppingTxt"> Continue Shopping</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        ) }
    </div>
  )
}
