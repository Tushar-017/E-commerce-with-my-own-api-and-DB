import { Container } from "./Categories.style"
import { categories } from "../../data"
import CategoryItem from "../categoryItem/CategoryItem"

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  )
}

export default Categories
