import { BrowserRouter, Route, Routes } from "react-router-dom"
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

function App() {
  return (
    <BrowserRouter>
      {0 ? (
        <>
          <Navbar />
          {/* <Announcement /> */}
          {/* <Register /> */}
          {/* <Login /> */}
          <Cart />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Announcement />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/singleProduct" element={<SingleProduct />} />
          </Routes>
          <NewsLetter />
          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
