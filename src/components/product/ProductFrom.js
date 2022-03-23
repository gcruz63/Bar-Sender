import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createProduct, getProductTypes } from './ProductManager.js'


export const ProductForm = () => {
    const history = useHistory()
    const [productTypes, setProductTypes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentProduct, setCurrentProduct] = useState({
        numberOfProducts: 0,
        title: "",
        productTypeId: 0
    })

    useEffect(() => {
        // TODO: Get the product types, then set the state
        getProductTypes().then(productTypeData => setProductTypes(productTypeData))
    }, [])

    const changeProductState = (domEvent) => {
        const copy = { ...currentProduct }
        // const copy = Object.assign({}, currentProduct)
        copy[domEvent.target.name] = domEvent.target.value

        setCurrentProduct(copy)
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">Add New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Product Name: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentProduct.title}
                        onChange={changeProductState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Number of Product: </label>
                    <input type="text" name="numberOfProducts" required autoFocus className="form-control"
                        value={currentProduct.numberOfProducts}
                        onChange={changeProductState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div>
                    <label>Product Type</label>
                    <select onChange={changeProductState} name="productTypeId" value={currentProduct.productTypeId}>
                        <option value="0">Select a product type</option>
                        {
                            productTypes.map(productType => <option value={productType.id}>{productType.label}</option>)
                        }
                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const product = {
                        id: currentProduct.id,
                        title: currentProduct.title,
                        number_of_products: parseInt(currentProduct.numberOfProducts),
                        product_type: parseInt(currentProduct.productTypeId)
                    }

                    // Send POST request to your API
                    createProduct(product)
                        .then(() => history.push("/"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}