import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material"
import {
  Center,
  Container,
  Desc,
  Left,
  ListItem,
  Logo,
  LogoDiff,
  Right,
  SocialContainer,
  SocialIcon,
  List,
  Title,
  ContactItem,
  Payment,
} from "./Footer.style"

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          Shop<LogoDiff>wings</LogoDiff>
        </Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          obcaecati aliquam beatae dolore? Sint unde exercitationem quae, at
          architecto quam illo. Sed doloremque illum qui, itaque facere incidunt
          similique iste!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px", marginLeft: "0" }} /> New Delhi,
          India
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 55 463
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> tusharo17@gmail.com
        </ContactItem>
        <Payment src="http://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
