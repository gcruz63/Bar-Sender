
import "./Cart.css"
import { Subtotal } from '../subtotal/Subtotal'
import { getCurrentOrder } from './OrderManager'
import React, { useState, useEffect } from "react"

export const Cart = () => {
  const [currentOrder, setCurrentOrder] = useState({})
  useEffect(() => {
    if (localStorage.getItem('BS_token')) {
      getCurrentOrder(localStorage.getItem('MyUser')).then(setCurrentOrder)
    }
  }, [])

  return (
    <div className='cart'>
      <div className='cart__left'>

      </div>

      <div>
        <h2 className='cart__title'>
          Your Cart
        </h2>
        {currentOrder.id}
      </div>

      <div className='checkout__right'>
        <h2> <Subtotal /> </h2>
      </div>

    </div>
  )
}

