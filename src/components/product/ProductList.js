import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { deleteProduct, getProducts, addProduct } from "./ProductManager.js"
import { getSingleUser } from "../users/UserManger"
import { useStateValue } from "../StateProvider"


export const ProductList = () => {
    const history = useHistory()
    const [products, setProducts] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    const [{ cart }, dispatch] = useStateValue();

    const addToCart = (item) => {
        //dispatch item into state need dispatch to use reducers
        dispatch({
            type: 'ADD_TO_CART',
            item
        });
    };

    useEffect(() => {
        if (localStorage.getItem('BS_token')) {
            getSingleUser(localStorage.getItem('MyUser')).then(setCurrentUser)
        }
    }, [])

    const handleAddToCart = (product) => addProduct(product.id).then(() => addToCart(product))


    const getAllTheProducts = () => getProducts().then(data => setProducts(data))

    useEffect(() => {
        getAllTheProducts()
    }, [])

    return (
        <article className="products">
            {currentUser.account_type === 2 ?
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/products/new" })
                    }}
                >Add New Product</button> : ""}
            {
                products.map(product => {
                    return <section key={`product--${product.id}`} className="product">
                        <div className="product__name">{product.name}</div>
                        <div className="product__img"><img src={"http://localhost:8000" + product.image_path} /></div>
                        <div className="product__price">{product.price}</div>
                        <div className="product__quantity">{product.quantity}</div>
                        {currentUser.account_type === 1 ? <button onClick={() => handleAddToCart(product)}>add to Cart</button> : ""}
                        {currentUser.account_type === 2 ? <div>
                            <Link className="btn" to={`/products/${product.id}/update`}>Edit Product</Link>
                            <button onClick={() => {
                                deleteProduct(product.id).then(getAllTheProducts)
                            }}>Destroy Product</button></div> : ""}
                    </section>
                })
            }
        </article>
    )
}
