import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { deleteProduct, getProducts } from "./ProductManager.js"
import { getSingleUser } from "../users/UserManger"

export const ProductList = (props) => {
    const history = useHistory()
    const [products, setProducts] = useState([])
    // const [currentUser, setCurrentUser] = useState({})
    // useEffect(() => {
    //     if (localStorage.getItem('BS_token')) {
    //         getSingleUser(localStorage.getItem('MyUser')).then(setCurrentUser)
    //     }
    // }, [])

    const getAllTheProducts = () => getProducts().then(data => setProducts(data))

    useEffect(() => {
        getAllTheProducts()
    }, [])

    return (
        <article className="products">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/products/new" })
                }}
            >Register New Product</button>
            {
                products.map(product => {
                    return <section key={`product--${product.id}`} className="product">
                        <div className="product__name">{product.name}</div>
                        <div className="product__price">{product.price}</div>
                        <div className="product__quantity">{product.quantity}</div>
                        <Link className="btn" to={`/products/${product.id}/update`}>Edit Product</Link>
                        <button onClick={() => {
                            deleteProduct(product.id).then(getAllTheProducts)
                        }}>Destroy Product</button>
                    </section>
                })
            }
        </article>
    )
}