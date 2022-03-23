// import React from "react"
// import { Link } from "react-router-dom"
// import { useHistory } from "react-router-dom"
// import "./NavBar.css"

// export const NavBar = () => {
//     const history = useHistory()
//     return (
//         <>

//             {
//                 (localStorage.getItem(account_type.id) === 1){
//                 <ul>
//                     <li className="navbar__item">
//                         Home
//                     </li>
//                     <li className="navbar__item">
//                         Stores
//                     </li>
//                     <li className="navbar__item">
//                         Favorites
//                     </li>
//                     <li className="navbar__item">
//                         Profile
//                     </li>
//                     <li className="navbar__item" to='/your/cart'>
//                         Cart
//                     </li>
//                     <li className="navbar__item">
//                         Products
//                     </li>
//                 </ul>

//             } else if(localStorage.getItem(account_type.id) === 2){
//                 <ul>
//                     <li className="navbar__item">
//                         Drivers
//                     </li>
//                     <li className="navbar__item">
//                         Sales
//                     </li>
//                     <li className="navbar__item">
//                         Orders
//                     </li>
//                 </ul>
//             }
//             {
//                 localStorage.getItem('BS_token')
//                     ?
//                     <button className="button is-outlined" onClick={() => {
//                         localStorage.removeItem('BS_token')
//                         history.push('/login')
//                     }}>Logout {currentUser.username}</button>
//                     :
//                     <>
//                         <Link to="/register" className="button is-link">Register</Link>
//                         <Link to="/login" className="button is-outlined">Login</Link>
//                     </>
//             }

//         </>)
// }



import React, { useState, useEffect, useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { getSingleUser } from "../users/UserManger"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    const navbar = useRef()
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        if (localStorage.getItem('BS_token')) {
            getSingleUser(localStorage.getItem('MyUser')).then(setCurrentUser)
        }
    }, [])


    return (
        <nav className="navbar is-success mb-3 py-2" role="navigation" aria-label="main navigation">


            <div className="navbar" ref={navbar}>
                <div className="navbar">
                    {
                        localStorage.getItem('BS_token')

                            ?
                            <>
                                {
                                    currentUser.account_type === 1 ? <Link to="/home" className="navbar-item">Homes</Link> : ""
                                }
                                {
                                    currentUser.account_type === 1 ? <Link to="/stores" className="navbar-item">Stores</Link> : ""
                                }
                                {
                                    currentUser.account_type === 1 ? <Link to="/favorites" className="navbar-item">Favorites</Link> : ""
                                }
                                {
                                    currentUser.account_type === 1 ? <Link to="/products" className="navbar-item">Products</Link> : ""
                                }
                                {
                                    currentUser.account_type === 1 ? <Link to="/profile" className="navbar-item">Profile</Link> : ""
                                }
                                {
                                    currentUser.account_type === 1 ? <Link to="/your/cart" className="navbar-item">Cart</Link> : ""
                                }
                                {
                                    currentUser.account_type === 2 ? <Link to="/my-products" className="navbar-item">Home</Link> : ""
                                }
                                {
                                    currentUser.account_type === 2 ? <Link to="/drivers" className="navbar-item">Drivers</Link> : ""
                                }
                                {
                                    currentUser.account_type === 2 ? <Link to="/sales" className="navbar-item">Sales</Link> : ""
                                }
                                {
                                    currentUser.account_type === 2 ? <Link to="/orders" className="navbar-item">Orders</Link> : ""
                                }
                            </>
                            :
                            ""
                    }

                </div>
                <div className="navbar">
                    <div className="navbar-item">
                        <div className="buttons">
                            {
                                localStorage.getItem('BS_token')
                                    ?
                                    <button className="button is-outlined" onClick={() => {
                                        localStorage.removeItem('BS_token')
                                        history.push('/login')
                                    }}>Logout {currentUser.username}</button>
                                    :
                                    <>
                                        <Link to="/register" className="button is-link">Register</Link>
                                        <Link to="/login" className="button is-outlined">Login</Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


