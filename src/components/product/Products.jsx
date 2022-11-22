import { ProductContainer, Container } from "./Products.style"
import { popularProducts } from "../../data"
import Product from "./Product"
import axios from "axios"
import { useEffect, useState } from "react"

const Products = ({ category, filters, sort }) => {
  // STATE
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  // Fetching products and category products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:8000/api/products?category=${category}`
            : "http://localhost:8000/api/products"
        )
        setProducts(res.data)
      } catch (error) {}
    }
    getProducts()
  }, [category])

  // filtered products
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      )
  }, [products, category, filters])

  // sorted products
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === "asc") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
      <ProductContainer>
        {category
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item.id} />)}
      </ProductContainer>
    </Container>
  )
}

export default Products
