import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { BarSender } from "./components/BarSender.js"
import { initialState } from "./components/reducer.js"
import "./index.css"
import { StateProvider } from "./components/StateProvider"

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState}>
      <Router>
        < BarSender />
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

