import { useState, useEffect} from 'react' 
import {getProducts} from '../../asyncMock'
import {getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import {useParams} from 'react-router-dom' 

const ItemListContainer = ({ greeting}) =>{
    const [products, setProducts] = useState([])
    
    const {categoryId} = useParams()
    

    useEffect(() =>{
        console.log("2")
        const asynFunc = categoryId ? getProductsByCategory : getProducts
    
        asynFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    
    }, [categoryId])
    
    useEffect(() => {
        console.log("1")
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer