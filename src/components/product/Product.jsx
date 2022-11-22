import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material"

import { Link } from "react-router-dom"
import { Circle, Container, Icon, Image, Info, Deal } from "./Product.style"

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      {/* <Deal>Upto {item.offer} off</Deal> */}
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
