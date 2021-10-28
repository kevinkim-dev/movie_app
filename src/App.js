import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"

function App() {
  return (
    <HashRouter>
      <Route path="/home" component={Home}>
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction" component={Home}>
        <h1>Home Introduction</h1>
      </Route>
      <Route path="/about" component={About}>
        <h1>About</h1>
      </Route>
    </HashRouter>
  )
}

export default App