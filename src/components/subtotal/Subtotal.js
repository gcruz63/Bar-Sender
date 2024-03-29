import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'

export const Subtotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>{' ${value}'}</strong>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

