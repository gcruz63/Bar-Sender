import React from "react"
import { Route } from "react-router-dom"
import { BarSender } from "./BarSender"
import { ProductForm } from "./product/ProductFrom"
import { Cart } from "./cart/Cart"
import { ProductList } from "./product/ProductList"
import { checkoutProduct } from "./cart/CheckoutProducts"
export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <h1> hey</h1>
            </Route>
            <Route exact path="/productForm">
                <ProductForm />
            </Route>
            <Route exact path="/orders/current">
                <Cart />
            </Route>
            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route exact path="/checkoutProducts">
                <checkoutProduct />
            </Route>
        </main>
    </>
}
