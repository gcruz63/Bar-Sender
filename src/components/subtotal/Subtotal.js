import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

export const Subtotal = () => {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue()


    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length}): <strong>{value}</strong>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={() => history.push('/checkoutProduct')}>Proceed to Checkout</button>
        </div>
    )
}

