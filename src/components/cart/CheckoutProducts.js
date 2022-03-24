import React from 'react'
import './CheckoutProducts.css'
import { useStateValue } from '../StateProvider'
import { getSingleUser } from "../users/UserManger"
import { Cart } from './Cart';
import { useEffect, useState } from 'react'
import { completeOrder, getCurrentOrder } from './OrderManager'
import { Link } from 'react-router-dom'
function CheckoutProducts() {
    const [{ cart }, dispatch] = useStateValue();
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        if (localStorage.getItem('BS_token')) {
            getSingleUser(localStorage.getItem('MyUser')).then(setCurrentUser)
        }
    }, [])

    const finalOrder = (order) => getCurrentOrder(order.id).then(completeOrder(order))


    return (
        <div className='checkoutProduct'>
            <div className='payment_container'>
                <h1>
                    Checkout{
                        <Link to="/orders/current">{cart?.length} Items</Link>
                    }
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Information</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{currentUser?.email}</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items</h3>
                    </div>
                    <div className='payment_items'>
                        <p>{cart.map(item => {
                            <Cart />
                        })}</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3>Payment Method</h3>
                        </div>
                        <div className='payment_details'>

                        </div>

                    </div>

                </div>

                <button onClick={() => finalOrder(order)}>Complete Order</button>
            </div>

        </div>
    )
}

export default CheckoutProducts