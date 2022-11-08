import Announcement from "../components/announcement/Announcement"
import Categories from "../components/categories/Categories"
import Navbar from "../components/navbar/Navbar"
import Products from "../components/product/Products"
import Slider from "../components/slider/Slider"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home
