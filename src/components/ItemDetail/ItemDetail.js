import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {Link, useNavigate} from "react-router-dom"


const ItemDetail = ({id, name, category, description, price, stock}) => {
    
    const navigate =useNavigate()
    
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                </section> 
                <footer className='ItemFooter'>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada' ,quantity)}/>
                </footer>
        </article>
    )
}

export default ItemDetail 