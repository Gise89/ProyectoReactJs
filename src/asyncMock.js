const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'https://cbafederal.net/wp-content/unploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {id: '2', name: 'Sansung S21', price: 800, category:'celular', img:'https://cbafederal.net/wp-content/unploads/2021/02/i-12-a.png'},
    {id: '3', name: 'Ipad 8va generacion', price: 1800, category:'tablet', img:'https://cbafederal.net/wp-content/unploads/2021/02/i-12-a.png'}
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
            resolve(products.find(prod =>prod.category === category))
        })
    }, 500)
}