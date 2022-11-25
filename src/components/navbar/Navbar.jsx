import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Badge from "@mui/material/Badge"
import { useDispatch, useSelector } from "react-redux"
import { logoutSuccess } from "../../redux/userRedux"
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
import { emptyCart } from "../../redux/cartRedux"

const Navbar = () => {
  const qty = useSelector((state) => state.cart.qty)
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    // e.preventDefault()
    dispatch(logoutSuccess())
    dispatch(emptyCart())
  }

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
          <Link to="/">
            <Logo>
              Shop<LogoDiff>wings</LogoDiff>
            </Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register">{!user && <MenuItem>REGISTER</MenuItem>}</Link>
          <Link to="/login">{!user && <MenuItem>SIGN IN</MenuItem>}</Link>
          {user && <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>}
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
