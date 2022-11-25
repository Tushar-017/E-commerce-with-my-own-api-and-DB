import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Announcement from "./components/announcement/Announcement"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import NewsLetter from "./components/newsletter/NewsLetter"
import Cart from "./pages/cart/Cart"
import Home from "./pages/Home"
import Login from "./pages/login/Login"
import ProductList from "./pages/productList/ProductList"
import Register from "./pages/register/Register"
import SingleProduct from "./pages/singleProduct/SingleProduct"
import Success from "./pages/Success"

import "./App.css"

function App() {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Announcement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
        {user && <NewsLetter />}
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
