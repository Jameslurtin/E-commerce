import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Steps/Home';
import Product from './Steps/Product';


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}>
          </Route>
          <Route path="/Product-page" element={<Product />}>
          </Route>
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App
