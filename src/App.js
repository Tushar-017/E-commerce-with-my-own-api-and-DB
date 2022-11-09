import { BrowserRouter, Route, Routes } from "react-router-dom"
import Announcement from "./components/announcement/Announcement"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import NewsLetter from "./components/newsletter/NewsLetter"
import Home from "./pages/Home"
import ProductList from "./pages/productList/ProductList"
import SingleProduct from "./pages/singleProduct/SingleProduct"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
