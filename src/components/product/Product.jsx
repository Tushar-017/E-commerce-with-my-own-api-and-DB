import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material"
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
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
