import React, { createContext, useContext, useReducer } from "react"
import reducer from "./reducer"

export const StateContext = createContext();
//state provider stores the the value in global state
export const StateProvider = ({ initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// has to be a function to call the react hook because you can not call it on top of a hook
export const useStateValue = () => useContext(StateContext);