import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom"
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
  const user = false

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
