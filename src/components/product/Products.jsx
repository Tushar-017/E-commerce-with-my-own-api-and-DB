import { ProductContainer, Container } from "./Products.style"
import { popularProducts } from "../../data"
import Product from "./Product"

const Products = () => {
  return (
    <Container>
      <ProductContainer>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ProductContainer>
    </Container>
  )
}

export default Products
