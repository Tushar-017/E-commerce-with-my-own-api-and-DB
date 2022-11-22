import { useState } from "react"
import { useParams } from "react-router-dom"
import Products from "../../components/product/Products"

import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from "./ProductList.style"

const ProductList = () => {
  const { category } = useParams()
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  // const location = useLocation()
  // console.log(location.pathname.split("/")[2])

  // FILTER FUNCTION
  const handelFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }
  // console.log(filters)

  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" defaultValue="Color" onChange={handelFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>yellow</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>red</Option>
          </Select>
          <Select name="size" defaultValue="Size" onChange={handelFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (low to high)</Option>
            <Option value="desc">Price (high to low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
    </Container>
  )
}

export default ProductList
