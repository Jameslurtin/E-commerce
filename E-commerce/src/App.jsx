import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Steps/Home';
import Product from './Steps/Product';
import Description from './Steps/Description';
import Completed from './Steps/completed';
import Cart from './Steps/Cart';
import Profile from './Steps/Profile';
import Address from './Steps/Address';
import Shipping from './Steps/Shipping';
import Payment from './Steps/Payment';
import Review from './Steps/Review';
import Aboutus from './Steps/Aboutus';
import Contactus from './Steps/Contactus';


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}>
          </Route>
          <Route path="/Product-page" element={<Product/>}>
          </Route>
          <Route path="/Product-description" element={<Description/>}>
          </Route>
          <Route path="/confirmation" element={<Completed />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
          <Route path="/profile" element={<Profile />}>
          </Route>
          <Route path="/Address" element={<Address />}>
          </Route>
          <Route path="/Shipping" element={<Shipping />}>
          </Route>
          <Route path="/Payment" element={<Payment />}>
          </Route>
          <Route path="/Review" element={<Review />}>
          </Route>
          <Route path="/Aboutus" element={<Aboutus/>}>
          </Route>
          <Route path="/Contactus" element={<Contactus/>}>
          </Route>
          
          
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App
