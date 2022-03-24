
import "./Cart.css"
import { Subtotal } from '../subtotal/Subtotal'
import { getCurrentOrder } from './OrderManager'
import { removeProduct } from "../product/ProductManager"
import React, { useState, useEffect } from "react"
import { useStateValue } from "../StateProvider"

export const Cart = () => {
  const [{ cart }, dispatch] = useStateValue()

  const removeProductFromCart = (product) => {
    removeProduct(product.id).then(() => {
      dispatch({
        type: 'REMOVE_FROM_CART',
        item: product
      })

    })
  }

  return (
    <div className='cart'>
      <div className='cart__left'>

      </div>

      <div>
        <h2 className='cart__title'>
          Your Cart
        </h2>
        {
          cart && cart.map((product, index) => {
            return <section key={`product--${index}`} className="Cart">
              <div className="product__name">{product.name}</div>
              <div className="product__price">Price:${product.price}</div>
              <div className="product__quantity">Quantity{product.quantity}</div>
              <button onClick={() => {
                removeProductFromCart(product)
              }}>Remove Item</button>
            </section>
          })
        }
        < div className='checkout__right'>
          <h2> <Subtotal /> </h2>
        </div>


      </div>
    </div >
  )
}


