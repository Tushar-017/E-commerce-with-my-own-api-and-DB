import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Badge from "@mui/material/Badge"
import { useSelector } from "react-redux"
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  LogoDiff,
  Right,
  MenuItem,
} from "./Navbar.style"

const Navbar = () => {
  const qty = useSelector((state) => state.cart.qty)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Shop<LogoDiff>wings</LogoDiff>
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={qty} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
