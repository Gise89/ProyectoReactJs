import cart from './assets/logo.jpg'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return(
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={cart} alt='cart-wdiget'/>
            {totalQuantity}    
        </Link>
    )    
}        

export default CartWidget