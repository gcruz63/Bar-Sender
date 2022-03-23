import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { BarSender } from "./components/BarSender.js"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      < BarSender />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
