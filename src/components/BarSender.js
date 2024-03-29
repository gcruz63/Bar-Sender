import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./navbar/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const BarSender = () => (
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