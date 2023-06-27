const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {id: '2', name: 'Sansung S21', price: 800, category:'celular', img:'https://multipoint.com.ar/Image/0/700_700-SM-G991BZVLARO--1.jpg', stock:10},
    {id: '3', name: 'Ipad 8va generacion', price: 1800, category:'tablet', img:'https://necxus.com.ar/products_image/22036/1000x1000_2.webp', stock:15}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById= (producId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod =>prod.id === producId))
        })
    }, 500)
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod =>prod.category === category))
        })
    }, 500)
}