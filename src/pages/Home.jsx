import Categories from "../components/categories/Categories"

import Products from "../components/product/Products"
import Slider from "../components/slider/Slider"

const Home = () => {
  return (
    <div>
      {/* <Announcement />
      <Navbar /> */}
      <Slider />
      <Categories />
      <h1>Featured</h1>
      <Products />
      {/* <NewsLetter />
      <Footer /> */}
    </div>
  )
}

export default Home
