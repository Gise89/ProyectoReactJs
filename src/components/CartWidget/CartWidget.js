import cart from './assets/logo.jpg'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" style={{width:'10rem'}}/>
            🛒0
        </div>
    )
}
export default CartWidget