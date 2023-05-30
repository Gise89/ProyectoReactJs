import CartWidget from "./CartWidget/CartWidget"
const NavBar = () =>{
    return(
        <nav>
            <h1>Bienvenido a la tienda de tus sueños</h1>
            <div>
                <botton>Inicio </botton>
                <botton>Nosotros </botton>
                <botton>Nuestros Servicios </botton>
                <botton>Contacto </botton>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar