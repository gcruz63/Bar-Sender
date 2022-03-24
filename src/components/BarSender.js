import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./navbar/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { getCurrentOrder } from "./cart/OrderManager"
import { useStateValue } from "./StateProvider"
import { useEffect } from "react"

export const BarSender = () => {
    const [, dispatch] = (useStateValue())
    useEffect(() => {
        if (localStorage.getItem('BS_token')) {
            getCurrentOrder(localStorage.getItem('MyUser')).then(data => {
                dispatch({
                    type: "INIT_CART",
                    item: data
                })
            })
        }
    }, [])


    return (
        <>
            <Route render={() => {
                if (localStorage.getItem("BS_token")) {
                    return <>
                        <Route>
                            <NavBar />
                            <ApplicationViews />
                        </Route>
                    </>
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

        </>
    )
}