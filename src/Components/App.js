import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Nav from "./Nav"
import ShoppingContainer from './ShoppingContainer'
import Home from "./Home/Home"
import Contact from "./Contact/Contact"

const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<ShoppingContainer />} />
      </Routes>
    </Router>
  )
}

export default App;